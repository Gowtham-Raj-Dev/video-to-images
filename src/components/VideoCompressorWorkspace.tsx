"use client";

import { useState, useRef } from "react";
import { UploadCloud, FileVideo, CheckCircle2, Download, Loader2, FileArchive, Settings2, Zap } from "lucide-react";
import { FFmpeg } from "@ffmpeg/ffmpeg";
import { fetchFile, toBlobURL } from "@ffmpeg/util";

export function VideoCompressorWorkspace() {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "processing" | "done">("idle");
  const [progress, setProgress] = useState(0);
  const [outputUrl, setOutputUrl] = useState<string>("");
  const [crf, setCrf] = useState<number>(28); // Compression level (lower is better quality, higher is smaller size)
  const ffmpegRef = useRef<FFmpeg | null>(null);

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

  const compressVideo = async () => {
    if (!file) return;
    setStatus("loading");
    setProgress(0);

    const ffmpeg = ffmpegRef.current ?? (ffmpegRef.current = new FFmpeg());

    // Load ffmpeg if not loaded
    if (!ffmpeg.loaded) {
      const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd';
      await ffmpeg.load({
        coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
        wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm'),
      });
    }

    setStatus("processing");
    
    ffmpeg.on('progress', ({ progress, time }) => {
      setProgress(Math.round(progress * 100));
    });

    const inputName = 'input.mp4';
    const outputName = 'output.mp4';

    await ffmpeg.writeFile(inputName, await fetchFile(file));

    // Run FFmpeg compression with x264 and the selected CRF
    // CRF 28 is a good default for compressed web video
    await ffmpeg.exec(['-i', inputName, '-vcodec', 'libx264', '-crf', crf.toString(), '-preset', 'fast', outputName]);

    const data = await ffmpeg.readFile(outputName);
    const blob = new Blob([data as any], { type: 'video/mp4' });
    const url = URL.createObjectURL(blob);
    
    setOutputUrl(url);
    setStatus("done");
  };

  const downloadFile = () => {
    const a = document.createElement('a');
    a.href = outputUrl;
    a.download = `compressed_${file?.name || 'video.mp4'}`;
    a.click();
  };

  const getCompressionLabel = () => {
    if (crf < 23) return "High Quality (Larger Size)";
    if (crf > 30) return "Low Quality (Smallest Size)";
    return "Balanced (Recommended)";
  };

  return (
    <div className="w-full max-w-4xl mx-auto rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] shadow-card overflow-hidden">
      {!file ? (
        <div 
          className="p-12 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-[color:var(--bg-alt)] transition-colors min-h-[400px]"
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
          onClick={() => document.getElementById("video-upload")?.click()}
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
            id="video-upload" 
            type="file" 
            accept="video/*" 
            className="hidden" 
            onChange={handleFileChange}
          />
        </div>
      ) : (
        <div className="flex flex-col md:flex-row min-h-[500px]">
          {/* Left panel - Video Preview */}
          <div className="w-full md:w-2/3 bg-[color:var(--bg-alt)] p-6 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-[color:var(--border)]">
            <div className="relative w-full max-w-lg aspect-video bg-black rounded-lg overflow-hidden flex items-center justify-center shadow-inner">
              {status === "done" && outputUrl ? (
                <video src={outputUrl} controls className="w-full h-full object-contain" />
              ) : (
                <video src={URL.createObjectURL(file)} controls className="w-full h-full object-contain opacity-70" />
              )}
              
              {status === "processing" && (
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center z-10">
                  <Loader2 className="h-10 w-10 text-accent animate-spin mb-4" />
                  <div className="text-white font-medium text-lg">Compressing Video...</div>
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
                  <div className="text-white/70 mt-2 text-sm text-center max-w-xs">Downloading WebAssembly core (approx 30MB). This only happens once.</div>
                </div>
              )}
            </div>
            
            <div className="mt-4 flex items-center justify-between w-full max-w-lg px-2">
              <div className="flex items-center gap-2 text-sm text-muted">
                <FileVideo className="h-4 w-4" />
                <span className="truncate max-w-[200px]">{file.name}</span>
              </div>
              <div className="text-sm font-medium">
                {(file.size / (1024 * 1024)).toFixed(2)} MB
              </div>
            </div>
          </div>
          
          {/* Right panel - Controls */}
          <div className="w-full md:w-1/3 p-6 flex flex-col">
            <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
              <Settings2 className="h-5 w-5 text-accent" />
              Compression Settings
            </h3>
            
            <div className="space-y-6 flex-1">
              <div>
                <label className="text-sm font-medium mb-3 block">
                  Compression Level
                </label>
                <div className="flex justify-between text-xs text-muted mb-2">
                  <span>High Quality</span>
                  <span>Small Size</span>
                </div>
                <input 
                  type="range" 
                  min="20" 
                  max="35" 
                  step="1"
                  value={crf}
                  onChange={(e) => setCrf(Number(e.target.value))}
                  disabled={status !== "idle"}
                  className="w-full accent-accent cursor-pointer"
                />
                <div className="mt-2 text-center text-sm font-medium text-accent bg-accent/10 py-1.5 rounded-md">
                  {getCompressionLabel()} (CRF {crf})
                </div>
              </div>
              
              <div className="rounded-lg bg-[color:var(--bg-alt)] p-4 border border-[color:var(--border)] text-sm text-muted">
                <div className="flex gap-2 items-start">
                  <FileArchive className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <p>All compression happens natively in your browser using WebAssembly. No files are uploaded to our servers.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              {status === "done" ? (
                <div className="flex flex-col gap-3">
                  <button 
                    onClick={downloadFile}
                    className="btn btn-primary w-full flex items-center justify-center gap-2 h-12"
                  >
                    <Download className="h-4 w-4" />
                    Download Compressed Video
                  </button>
                  <button 
                    onClick={() => {
                      setFile(null);
                      setStatus("idle");
                      setOutputUrl("");
                    }}
                    className="btn btn-ghost w-full h-12"
                  >
                    Compress Another
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  <button 
                    onClick={compressVideo}
                    disabled={status !== "idle"}
                    className="btn btn-primary w-full flex items-center justify-center gap-2 h-12 disabled:opacity-50"
                  >
                    {status === "idle" && (
                      <>
                        <Zap className="h-4 w-4" />
                        Start Compression
                      </>
                    )}
                    {status === "loading" && "Loading Engine..."}
                    {status === "processing" && "Compressing..."}
                  </button>
                  <button 
                    onClick={() => {
                      setFile(null);
                      setStatus("idle");
                      setOutputUrl("");
                    }}
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
