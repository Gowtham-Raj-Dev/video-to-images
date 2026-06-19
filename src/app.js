import {
    WatermarkEngine,
    detectWatermarkConfig,
    calculateWatermarkPosition
} from './core/watermarkEngine.js';
import { WatermarkWorkerClient, canUseWatermarkWorker } from './core/workerClient.js';
import {
    isConfirmedWatermarkDecision,
    resolveDisplayWatermarkInfo
} from './core/watermarkDisplay.js';
import { canvasToBlob } from './core/canvasBlob.js';
import {
    loadImage,
    setStatusMessage,
    showLoading,
    hideLoading
} from './utils.js';
import {
    consumeDebugFileHandoff,
    getDebugFileKind,
    pickDebugUploadFile,
    saveDebugFileHandoff
} from './shared/debugFileHandoff.js';

const TEXT = {
    loading: 'Loading resources...',
    size: 'Size',
    watermark: 'Detected Watermark',
    position: 'Position',
    status: 'Status',
    removed: 'Watermark Removed',
    skipped: 'No removable watermark detected, original image retained',
    unsupported: 'Browser does not support copying images',
    copied: 'Copied!',
    copy: 'Copy Result',
    copyFailed: 'Copy failed',
    unsupportedFile: 'Please select JPG, PNG, WebP image, or MP4/WebM/MOV video.',
    fileTooLarge: 'Images over 20MB are not supported currently. Videos will be routed to video debugger.',
    handoffVideo: 'Entering video debug flow...'
};

let enginePromise = null;
let workerClient = null;
let currentItem = null;

let uploadArea, fileInput, singlePreview, staticCompare, originalImage, processedImage, originalInfo, processedInfo, downloadBtn, resetBtn, processedOverlay, sliderHandle, fileQueuePanel, fileQueueList, downloadAllBtn;
export function initApp() {
uploadArea = document.getElementById('uploadArea');
fileInput = document.getElementById('fileInput');
singlePreview = document.getElementById('singlePreview');
staticCompare = document.getElementById('staticCompare');
originalImage = document.getElementById('originalImage');
processedImage = document.getElementById('processedImage');
originalInfo = document.getElementById('originalInfo');
processedInfo = document.getElementById('processedInfo');
downloadBtn = document.getElementById('downloadBtn');
resetBtn = document.getElementById('resetBtn');
processedOverlay = document.getElementById('processedOverlay');
sliderHandle = document.getElementById('sliderHandle');
fileQueuePanel = document.getElementById('fileQueuePanel');
fileQueueList = document.getElementById('fileQueueList');
downloadAllBtn = document.getElementById('downloadAllBtn');

async function getEngine() {
    if (!enginePromise) {
        enginePromise = WatermarkEngine.create().catch((error) => {
            enginePromise = null;
            throw error;
        });
    }
    return enginePromise;
}

function getEstimatedWatermarkInfo(item) {
    if (!item?.originalImg) return null;
    const { width, height } = item.originalImg;
    const config = detectWatermarkConfig(width, height);
    const position = calculateWatermarkPosition(width, height, config);
    return {
        size: config.logoSize,
        position,
        config
    };
}

function disableWorkerClient(reason) {
    if (!workerClient) return;
    console.warn('disable worker path, fallback to main thread:', reason);
    workerClient.dispose();
    workerClient = null;
}

function cleanupCurrentItem() {
    if (!currentItem) return;
    if (currentItem.originalUrl) URL.revokeObjectURL(currentItem.originalUrl);
    if (currentItem.processedUrl) URL.revokeObjectURL(currentItem.processedUrl);
    currentItem = null;
}

async function init() {
    try {
        showLoading(TEXT.loading);

        if (canUseWatermarkWorker()) {
            try {
                workerClient = new WatermarkWorkerClient({
                    workerUrl: '/workers/watermark-worker.js'
                });
            } catch (workerError) {
                console.warn('worker unavailable, fallback to main thread:', workerError);
                workerClient = null;
            }
        }

        if (!workerClient) {
            getEngine().catch((error) => {
                console.warn('main thread engine warmup failed:', error);
            });
        }

        hideLoading();
        setupEventListeners();
        setupSlider();
        await consumePendingImageHandoff();
    } catch (error) {
        hideLoading();
        console.error('initialize error:', error);
    }
}

function setupEventListeners() {
    uploadArea.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', handleFileSelect);

    document.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.classList.add('border-primary', 'bg-emerald-50');
    });

    document.addEventListener('dragleave', (e) => {
        if (e.clientX === 0 && e.clientY === 0) {
            uploadArea.classList.remove('border-primary', 'bg-emerald-50');
        }
    });

    document.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.classList.remove('border-primary', 'bg-emerald-50');
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            handleFiles(Array.from(e.dataTransfer.files));
        }
    });

    document.addEventListener('paste', (e) => {
        const items = e.clipboardData.items;
        const files = [];
        for (let i = 0; i < items.length; i++) {
            if (items[i].kind === 'file') {
                files.push(items[i].getAsFile());
            }
        }
        if (files.length > 0) handleFiles(files);
    });

    resetBtn.addEventListener('click', reset);
    window.addEventListener('beforeunload', () => {
        disableWorkerClient('beforeunload');
    });
}

function reset() {
    cleanupCurrentItem();
    singlePreview.style.display = 'none';
    if (staticCompare) staticCompare.style.display = '';
    if (fileQueuePanel) fileQueuePanel.style.display = 'none';
    fileInput.value = '';
    originalImage.src = '';
    processedImage.src = '';
    originalInfo.innerHTML = '';
    processedInfo.innerHTML = '';
    processedInfo.style.display = 'none';
    processedOverlay.style.display = 'none';
    sliderHandle.style.display = 'none';
    downloadBtn.style.display = 'none';
    setStatusMessage('');
    uploadArea.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function handleFileSelect(e) {
    handleFiles(Array.from(e.target.files));
}

async function handleFiles(files) {
    setStatusMessage('');

    if (fileQueuePanel && files.length > 0) {
        processBatchImages(files);
        return;
    }

    const validFile = pickDebugUploadFile(files);

    if (!validFile) {
        setStatusMessage(TEXT.unsupportedFile, 'warn');
        return;
    }

    const fileKind = getDebugFileKind(validFile);
    if (fileKind === 'video') {
        await routeVideoFile(validFile);
        return;
    }

    if (validFile.size > 20 * 1024 * 1024) {
        setStatusMessage(TEXT.fileTooLarge, 'warn');
        return;
    }

    cleanupCurrentItem();
    currentItem = {
        id: Date.now(),
        file: validFile,
        name: validFile.name,
        originalImg: null,
        processedMeta: null,
        processedBlob: null,
        originalUrl: null,
        processedUrl: null
    };

    singlePreview.style.display = 'block';
    if (staticCompare) staticCompare.style.display = 'none';
    processSingle(currentItem);
}

async function processBatchImages(files) {
    cleanupCurrentItem();
    if (staticCompare) staticCompare.style.display = 'none';
    singlePreview.style.display = 'none';
    fileQueuePanel.style.display = 'flex';
    fileQueueList.innerHTML = '';
    
    // Create UI items
    const batchItems = Array.from(files).map((f, i) => {
        const div = document.createElement('div');
        div.className = 'queue-item';
        div.innerHTML = `<div class="info"><span>${f.name}</span></div><span class="status-badge" id="img-status-${i}">Pending</span>`;
        fileQueueList.appendChild(div);
        return { file: f, index: i, div, processedUrl: null };
    });

    for (const item of batchItems) {
        const validFile = pickDebugUploadFile([item.file]);
        if (!validFile || getDebugFileKind(validFile) !== 'image' || validFile.size > 20 * 1024 * 1024) {
            document.getElementById(`img-status-${item.index}`).textContent = 'Skipped';
            document.getElementById(`img-status-${item.index}`).className = 'status-badge';
            continue;
        }

        document.getElementById(`img-status-${item.index}`).textContent = 'Processing...';
        document.getElementById(`img-status-${item.index}`).className = 'status-badge processing';

        try {
            const img = await loadImage(item.file);
            const processed = await processImageWithBestPath(item.file, img);
            item.processedUrl = URL.createObjectURL(processed.blob);

            const badge = document.getElementById(`img-status-${item.index}`);
            badge.textContent = 'Done';
            badge.className = 'status-badge done';
            
            // Add download button to the item
            const downBtn = document.createElement('a');
            downBtn.href = item.processedUrl;
            downBtn.download = `unwatermarked_${item.file.name.replace(/\.[^.]+$/, '')}.png`;
            downBtn.className = 'btn btn-primary';
            downBtn.style.padding = '4px 10px';
            downBtn.style.fontSize = '12px';
            downBtn.textContent = 'Download';
            item.div.appendChild(downBtn);
        } catch (err) {
            document.getElementById(`img-status-${item.index}`).textContent = 'Error';
            document.getElementById(`img-status-${item.index}`).className = 'status-badge';
        }
    }
}

async function routeVideoFile(file) {
    try {
        showLoading(TEXT.handoffVideo);
        await saveDebugFileHandoff(file, 'video');
        window.location.assign('/video?fileHandoff=1');
    } catch (error) {
        hideLoading();
        console.error(error);
        setStatusMessage(error.message || 'Unable to enter video debug flow, please open the video page and select the file again.', 'warn');
    }
}

async function consumePendingImageHandoff() {
    const params = new URLSearchParams(window.location.search);
    if (params.get('fileHandoff') !== '1') return;

    try {
        const record = await consumeDebugFileHandoff('image');
        if (!record?.file) return;
        await handleFiles([record.file]);
        window.history.replaceState(null, '', window.location.pathname);
    } catch (error) {
        console.warn('image handoff unavailable:', error);
        setStatusMessage(error.message || 'Failed to read image handoff, please select the file again.', 'warn');
    }
}

function renderSingleImageMeta(item) {
    if (!item?.originalImg) return;

    const watermarkInfo = resolveDisplayWatermarkInfo(
        item,
        getEstimatedWatermarkInfo(item)
    );
    if (!watermarkInfo) return;

    originalInfo.innerHTML = `
        <p>${TEXT.size}: ${item.originalImg.width}x${item.originalImg.height}</p>
        <p>${TEXT.watermark}: ${watermarkInfo.size}x${watermarkInfo.size}</p>
        <p>${TEXT.position}: (${watermarkInfo.position.x},${watermarkInfo.position.y})</p>
    `;
}

function getProcessedStatusLabel(item) {
    return !isConfirmedWatermarkDecision(item)
        ? TEXT.skipped
        : TEXT.removed;
}

function renderSingleProcessedMeta(item) {
    if (!item?.originalImg) return;

    const watermarkInfo = resolveDisplayWatermarkInfo(
        item,
        getEstimatedWatermarkInfo(item)
    );
    const showWatermarkInfo = watermarkInfo && isConfirmedWatermarkDecision(item);

    processedInfo.innerHTML = `
        <p>${TEXT.size}: ${item.originalImg.width}x${item.originalImg.height}</p>
        ${showWatermarkInfo ? `<p>${TEXT.watermark}: ${watermarkInfo.size}x${watermarkInfo.size}</p>` : ''}
        ${showWatermarkInfo ? `<p>${TEXT.position}: (${watermarkInfo.position.x},${watermarkInfo.position.y})</p>` : ''}
        <p>${TEXT.status}: ${getProcessedStatusLabel(item)}</p>
    `;
}

async function processSingle(item) {
    try {
        const img = await loadImage(item.file);
        item.originalImg = img;
        item.originalUrl = img.src;

        originalImage.src = img.src;
        renderSingleImageMeta(item);

        const processed = await processImageWithBestPath(item.file, img);
        item.processedMeta = processed.meta;
        item.processedBlob = processed.blob;
        item.processedUrl = URL.createObjectURL(processed.blob);

        processedImage.src = item.processedUrl;
        processedOverlay.style.display = 'block';
        sliderHandle.style.display = 'flex';
        processedInfo.style.display = 'block';

        downloadBtn.style.display = 'flex';
        downloadBtn.onclick = () => downloadImage(item);

        renderSingleProcessedMeta(item);
        document.getElementById('comparisonContainer').scrollIntoView({ behavior: 'smooth', block: 'start' });
    } catch (error) {
        console.error(error);
    }
}

async function processImageWithBestPath(file, fallbackImage, options = {}) {
    if (workerClient) {
        try {
            return await workerClient.processBlob(file, options);
        } catch (error) {
            console.warn('worker process failed, fallback to main thread:', error);
            disableWorkerClient(error);
        }
    }

    const engine = await getEngine();
    const canvas = await engine.removeWatermarkFromImage(fallbackImage, options);
    const blob = await canvasToBlob(canvas);
    return {
        blob,
        meta: canvas.__watermarkMeta || null
    };
}

function downloadImage(item) {
    const a = document.createElement('a');
    a.href = item.processedUrl;
    a.download = `unwatermarked_${item.name.replace(/\.[^.]+$/, '')}.png`;
    a.click();
}

function setupSlider() {
    const container = document.getElementById('comparisonContainer');
    let isDown = false;

    function move(e) {
        if (!isDown) return;
        const rect = container.getBoundingClientRect();
        const clientX = e.clientX || (e.touches && e.touches[0].clientX);
        if (!clientX) return;

        const x = clientX - rect.left;
        const percent = Math.min(Math.max(x / rect.width, 0), 1) * 100;

        processedOverlay.style.width = `${percent}%`;
        sliderHandle.style.left = `${percent}%`;
    }

    container.addEventListener('mousedown', (e) => {
        isDown = true;
        move(e);
    });
    window.addEventListener('mouseup', () => { isDown = false; });
    window.addEventListener('mousemove', move);

    container.addEventListener('touchstart', (e) => {
        isDown = true;
        move(e);
    });
    window.addEventListener('touchend', () => { isDown = false; });
    window.addEventListener('touchmove', move);
}

init();
}
