"use client";

import { useState, useRef, useEffect } from "react";
import { UploadCloud, FileVideo, CheckCircle2, Download, Loader2, Crop, Settings2 } from "lucide-react";
import { FFmpeg } from "@ffmpeg/ffmpeg";
import { fetchFile, toBlobURL } from "@ffmpeg/util";
import ReactCrop, { type Crop as CropType, type PixelCrop, centerCrop, makeAspectCrop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

export function VideoCropWorkspace() {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "processing" | "done">("idle");
  const [progress, setProgress] = useState(0);
  const [outputUrl, setOutputUrl] = useState<string>("");
  const [aspectRatio, setAspectRatio] = useState<"1:1" | "16:9" | "9:16" | "free">("1:1");
  const [crop, setCrop] = useState<CropType>();
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>();
  const [videoUrl, setVideoUrl] = useState<string>("");

  const ffmpegRef = useRef<FFmpeg | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Create a stable object URL for the selected file. Doing this inside render
  // would generate a new URL on every state change (e.g. while dragging the crop),
  // forcing the video to reload and resetting the crop box.
  useEffect(() => {
    if (!file) {
      setVideoUrl("");
      return;
    }
    const url = URL.createObjectURL(file);
    setVideoUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [file]);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const getAspect = () => {
    if (aspectRatio === "1:1") return 1;
    if (aspectRatio === "16:9") return 16 / 9;
    if (aspectRatio === "9:16") return 9 / 16;
    return undefined;
  };

  const handleAspectChange = (val: string) => {
    setAspectRatio(val as any);
    if (!videoRef.current) return;
    
    const { clientWidth: width, clientHeight: height } = videoRef.current;
    if (!width || !height) return;

    let aspect: number | undefined;
    if (val === "1:1") aspect = 1;
    else if (val === "16:9") aspect = 16 / 9;
    else if (val === "9:16") aspect = 9 / 16;

    if (aspect) {
      const newCrop = centerCrop(
        makeAspectCrop({ unit: '%', width: 90 }, aspect, width, height),
        width,
        height
      );
      setCrop(newCrop);
    }
  };

  function onVideoLoad(e: React.SyntheticEvent<HTMLVideoElement>) {
    const { clientWidth, clientHeight } = e.currentTarget;
    const width = clientWidth;
    const height = clientHeight;
    const aspect = getAspect();
    
    if (aspect) {
      const initialCrop = centerCrop(
        makeAspectCrop({ unit: '%', width: 90 }, aspect, width, height),
        width,
        height
      );
      setCrop(initialCrop);
    } else {
      setCrop({
        unit: '%',
        width: 80,
        height: 80,
        x: 10,
        y: 10
      });
    }
  }

  const cropVideo = async () => {
    if (!file || !completedCrop || !videoRef.current) return;
    setStatus("loading");
    setProgress(0);

    const ffmpeg = ffmpegRef.current ?? (ffmpegRef.current = new FFmpeg());

    if (!ffmpeg.loaded) {
      const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd';
      await ffmpeg.load({
        coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
        wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm'),
      });
    }

    setStatus("processing");
    
    ffmpeg.on('progress', ({ progress }) => {
      setProgress(Math.round(progress * 100));
    });

    const inputName = 'input.mp4';
    const outputName = 'output.mp4';

    await ffmpeg.writeFile(inputName, await fetchFile(file));

    const video = videoRef.current;
    
    // Scale crop from the rendered CSS dimensions back to actual video resolution
    const scaleX = video.videoWidth / video.clientWidth;
    const scaleY = video.videoHeight / video.clientHeight;
    
    let cropX = Math.max(0, Math.round(completedCrop.x * scaleX));
    let cropY = Math.max(0, Math.round(completedCrop.y * scaleY));
    let cropWidth = Math.max(1, Math.min(video.videoWidth - cropX, Math.round(completedCrop.width * scaleX)));
    let cropHeight = Math.max(1, Math.min(video.videoHeight - cropY, Math.round(completedCrop.height * scaleY)));

    // libx264 requires width and height to be divisible by 2
    if (cropWidth % 2 !== 0) cropWidth -= 1;
    if (cropHeight % 2 !== 0) cropHeight -= 1;
    // Safety check in case width/height became 0 after subtracting 1
    if (cropWidth <= 0) cropWidth = 2;
    if (cropHeight <= 0) cropHeight = 2;

    const cropFilter = `crop=${cropWidth}:${cropHeight}:${cropX}:${cropY}`;

    try {
      await ffmpeg.exec([
        '-i', inputName, 
        '-vf', cropFilter, 
        '-c:v', 'libx264', 
        '-crf', '23', 
        '-preset', 'fast', 
        outputName
      ]);

      const data = await ffmpeg.readFile(outputName);
      const blob = new Blob([data as any], { type: 'video/mp4' });
      const url = URL.createObjectURL(blob);
      
      setOutputUrl(url);
      setStatus("done");
    } catch (error) {
      console.error("FFmpeg error:", error);
      setStatus("idle");
      alert("An error occurred while cropping the video. Please try again.");
    }
  };

  const downloadFile = () => {
    const a = document.createElement('a');
    a.href = outputUrl;
    a.download = `cropped_${file?.name || 'video.mp4'}`;
    a.click();
  };

  return (
    <div className="w-full max-w-4xl mx-auto rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] shadow-card overflow-hidden">
      {!file ? (
        <div 
          className="p-12 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-[color:var(--bg-alt)] transition-colors min-h-[400px]"
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
          onClick={() => document.getElementById("video-upload-crop")?.click()}
        >
          <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mb-6">
            <UploadCloud className="h-8 w-8 text-accent" />
          </div>
          <h3 className="text-xl font-bold mb-2">Drop your video here</h3>
          <p className="text-muted max-w-md">
            MP4, WebM, or MOV files up to 100MB are supported for optimal browser processing.
          </p>
          <button className="mt-8 btn btn-primary px-8">Browse Files</button>
          <input 
            id="video-upload-crop" 
            type="file" 
            accept="video/*" 
            className="hidden" 
            onChange={handleFileChange}
          />
        </div>
      ) : (
        <div className="flex flex-col md:flex-row min-h-[500px]">
          <div className="w-full md:w-2/3 bg-[color:var(--bg-alt)] p-6 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-[color:var(--border)] overflow-hidden">
            <div className="relative w-full max-w-lg min-h-[300px] bg-[color:var(--border)]/20 rounded-lg overflow-hidden flex items-center justify-center shadow-inner">
              {status === "done" && outputUrl ? (
                <video src={outputUrl} controls className="max-w-full object-contain" style={{ maxHeight: '60vh' }} />
              ) : (
                <div className="relative w-full flex items-center justify-center bg-black/5 p-4 overflow-hidden touch-none">
                  <ReactCrop
                    crop={crop}
                    onChange={(c) => setCrop(c)}
                    onComplete={(c) => setCompletedCrop(c)}
                    aspect={getAspect()}
                  >
                    {videoUrl && (
                      <video
                        ref={videoRef}
                        src={videoUrl}
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{ maxHeight: '60vh', maxWidth: '100%' }}
                        onLoadedMetadata={onVideoLoad}
                      />
                    )}
                  </ReactCrop>
                </div>
              )}
              
              {status === "processing" && (
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center z-10">
                  <Loader2 className="h-10 w-10 text-accent animate-spin mb-4" />
                  <div className="text-white font-medium text-lg">Cropping Video...</div>
                  <div className="w-64 h-2 bg-white/20 rounded-full mt-4 overflow-hidden">
                    <div className="h-full bg-accent transition-all duration-300" style={{ width: `${progress}%` }}></div>
                  </div>
                  <div className="text-white/70 mt-2 text-sm">{progress}% Complete</div>
                </div>
              )}
              
              {status === "loading" && (
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center z-10">
                  <Loader2 className="h-10 w-10 text-accent animate-spin mb-4" />
                  <div className="text-white font-medium text-lg">Loading Video Engine...</div>
                  <div className="text-white/70 mt-2 text-sm text-center max-w-xs">Downloading WebAssembly core.</div>
                </div>
              )}
            </div>
            
            <div className="mt-4 flex items-center justify-between w-full max-w-lg px-2">
              <div className="flex items-center gap-2 text-sm text-muted">
                <FileVideo className="h-4 w-4" />
                <span className="truncate max-w-[200px]">{file.name}</span>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/3 p-6 flex flex-col">
            <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
              <Settings2 className="h-5 w-5 text-accent" />
              Crop Settings
            </h3>
            
            <div className="space-y-6 flex-1">
              <div>
                <label className="text-sm font-medium mb-3 block">Target Aspect Ratio</label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { label: 'Square (1:1)', val: '1:1' },
                    { label: 'Portrait (9:16)', val: '9:16' },
                    { label: 'Landscape (16:9)', val: '16:9' },
                    { label: 'Custom (Free)', val: 'free' }
                  ].map(res => (
                    <button
                      key={res.val}
                      onClick={() => handleAspectChange(res.val)}
                      disabled={status !== "idle"}
                      className={`py-2 px-3 text-sm rounded-md border transition-colors ${
                        aspectRatio === res.val 
                          ? 'border-accent bg-accent/10 text-accent font-medium' 
                          : 'border-[color:var(--border)] hover:border-[color:var(--fg)]'
                      }`}
                    >
                      {res.label}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="rounded-lg bg-[color:var(--bg-alt)] p-4 border border-[color:var(--border)] text-sm text-muted">
                <div className="flex gap-2 items-start">
                  <Crop className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <p>Drag the crop box to position it. You can also resize it by dragging the corners.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              {status === "done" ? (
                <div className="flex flex-col gap-3">
                  <button onClick={downloadFile} className="btn btn-primary w-full flex items-center justify-center gap-2 h-12">
                    <Download className="h-4 w-4" /> Download Cropped Video
                  </button>
                  <button onClick={() => { setFile(null); setStatus("idle"); setOutputUrl(""); setCrop(undefined); setCompletedCrop(undefined); }} className="btn btn-ghost w-full h-12">
                    Crop Another
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  <button onClick={cropVideo} disabled={status !== "idle" || !completedCrop} className="btn btn-primary w-full flex items-center justify-center gap-2 h-12 disabled:opacity-50">
                    {status === "idle" && "Start Cropping"}
                    {status === "loading" && "Loading Engine..."}
                    {status === "processing" && "Cropping..."}
                  </button>
                  <button 
                    onClick={() => { setFile(null); setStatus("idle"); setOutputUrl(""); setCrop(undefined); setCompletedCrop(undefined); }} 
                    disabled={status !== "idle"} 
                    className="btn btn-ghost w-full h-12 text-red-500 hover:bg-red-500/10 disabled:opacity-50"
                  >
                    Reset
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
