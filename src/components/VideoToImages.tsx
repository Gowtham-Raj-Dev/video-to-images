"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { UploadCloud, FileVideo, CheckCircle2, Download, Image as ImageIcon, Loader2, Zap } from "lucide-react";
import JSZip from "jszip";
import { saveAs } from "file-saver";

interface FrameData {
  id: number;
  url: string;
  name: string;
}

export function VideoToImages() {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle" | "processing" | "done">("idle");
  const [progress, setProgress] = useState(0);
  const [frames, setFrames] = useState<FrameData[]>([]);
  const [fps, setFps] = useState<number>(30); // Default to extracting 30 frames per second
  const [format, setFormat] = useState<"jpeg" | "png" | "webp">("jpeg");
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

  const extractFrames = async () => {
    if (!file || !videoRef.current || !canvasRef.current) return;
    setStatus("processing");
    setProgress(0);
    setFrames([]);

    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    video.src = URL.createObjectURL(file);
    await new Promise((resolve) => {
      video.onloadeddata = resolve;
    });

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const duration = video.duration;
    const totalFrames = Math.floor(duration * fps);
    const extracted: FrameData[] = [];

    let currentFrame = 0;

    const seekToNextFrame = async () => {
      if (currentFrame >= totalFrames) {
        setStatus("done");
        return;
      }

      const time = currentFrame / fps;
      video.currentTime = time;

      await new Promise<void>((resolve) => {
        video.onseeked = () => {
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          // 001, 002 format
          const countString = String(currentFrame + 1).padStart(3, "0");
          const name = `videotoframe.codelove${countString}`;
          const url = canvas.toDataURL(`image/${format}`, 0.9);
          
          extracted.push({ id: currentFrame, url, name });
          setFrames([...extracted]);
          setProgress(Math.round(((currentFrame + 1) / totalFrames) * 100));
          
          currentFrame++;
          resolve();
        };
      });

      // Avoid blocking the UI completely
      requestAnimationFrame(seekToNextFrame);
    };

    seekToNextFrame();
  };

  const downloadZip = async () => {
    const zip = new JSZip();
    const folder = zip.folder("video_frames");

    frames.forEach((frame) => {
      // Remove base64 prefix to get raw data
      const ext = format === "jpeg" ? "jpg" : format;
      const base64Data = frame.url.replace(/^data:image\/(png|jpeg|webp);base64,/, "");
      folder?.file(`${frame.name}.${ext}`, base64Data, { base64: true });
    });

    const content = await zip.generateAsync({ type: "blob" });
    saveAs(content, "video_frames.zip");
  };

  return (
    <div className="w-full space-y-8">
      {/* Hidden elements for processing */}
      <video ref={videoRef} className="hidden" muted playsInline />
      <canvas ref={canvasRef} className="hidden" />

      {/* IDLE STATE: Upload Dropzone */}
      {status === "idle" && !file && (
        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
          className="group relative flex min-h-[380px] w-full cursor-pointer flex-col items-center justify-center gap-5 rounded-3xl border-2 border-dashed border-[color:var(--border)] bg-[color:var(--card)]/50 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:border-accent hover:bg-accent/5 hover:shadow-card"
        >
          <input
            id="workspace-file-input"
            type="file"
            accept="video/*"
            className="absolute inset-0 z-30 h-full w-full cursor-pointer opacity-0"
            onChange={handleFileChange}
          />
          <div className="relative z-20 flex flex-col items-center">
            <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-[color:var(--bg)] shadow-sm border border-[color:var(--border)] group-hover:scale-105 group-hover:border-accent/30 transition-all duration-300">
              <UploadCloud className="h-8 w-8 text-[color:var(--fg)] group-hover:text-accent transition-colors" />
            </div>
            <h3 className="font-display text-2xl font-bold tracking-tight text-[color:var(--fg)]">
              Select or drop video here
            </h3>
            <p className="mt-2 text-sm text-muted max-w-sm leading-relaxed">
              MP4, WebM, or MOV up to 2GB. Processed entirely on your device for maximum privacy.
            </p>
            <div className="mt-8 rounded-lg border border-[color:var(--border)] bg-[color:var(--bg)] px-5 py-2.5 text-sm font-semibold text-[color:var(--fg)] shadow-sm transition-colors group-hover:border-accent group-hover:text-accent">
              Choose Video File
            </div>
          </div>
        </div>
      )}

      {/* FILE SELECTED STATE */}
      {status === "idle" && file && (
        <div className="flex min-h-[420px] flex-col items-center justify-center rounded-[2.5rem] border border-[color:var(--border)] bg-[color:var(--card)] p-8 text-center shadow-card animate-in zoom-in-95 duration-500 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent opacity-50"></div>
          
          <div className="relative z-10 flex flex-col items-center w-full max-w-xl">
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-[color:var(--bg-alt)] border border-[color:var(--border)]">
               <FileVideo className="h-10 w-10 text-accent" />
            </div>
            <h3 className="font-display text-2xl font-bold text-[color:var(--fg)] truncate w-full px-4">{file.name}</h3>
            <p className="mt-2 text-sm text-muted font-medium">{(file.size / (1024 * 1024)).toFixed(2)} MB • Ready to process</p>
            
            <div className="mt-10 w-full rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg-alt)] p-6">
               <label className="block text-sm font-bold uppercase tracking-wider text-muted mb-4">Extraction Settings</label>
               <div className="flex flex-col sm:flex-row items-center gap-4">
                  <div className="flex-1 w-full flex items-center justify-between rounded-xl border border-[color:var(--border)] bg-[color:var(--card)] px-4 py-3">
                    <span className="font-semibold text-sm">Frame Rate</span>
                    <select 
                      value={fps} 
                      onChange={(e) => setFps(Number(e.target.value))}
                      className="bg-transparent font-bold text-accent outline-none cursor-pointer text-right"
                    >
                      <option className="bg-[color:var(--bg)] text-[color:var(--fg)]" value={10}>10 FPS</option>
                      <option className="bg-[color:var(--bg)] text-[color:var(--fg)]" value={30}>30 FPS</option>
                      <option className="bg-[color:var(--bg)] text-[color:var(--fg)]" value={60}>60 FPS</option>
                    </select>
                  </div>
                  <div className="flex-1 w-full flex items-center justify-between rounded-xl border border-[color:var(--border)] bg-[color:var(--card)] px-4 py-3">
                    <span className="font-semibold text-sm">Format</span>
                    <select 
                      value={format} 
                      onChange={(e) => setFormat(e.target.value as any)}
                      className="bg-transparent font-bold text-accent outline-none cursor-pointer text-right"
                    >
                      <option className="bg-[color:var(--bg)] text-[color:var(--fg)]" value="jpeg">JPG</option>
                      <option className="bg-[color:var(--bg)] text-[color:var(--fg)]" value="png">PNG</option>
                      <option className="bg-[color:var(--bg)] text-[color:var(--fg)]" value="webp">WEBP</option>
                    </select>
                  </div>
               </div>
            </div>
            
            <div className="mt-10 flex w-full flex-col sm:flex-row items-center gap-4">
              <button
                onClick={extractFrames}
                className="btn btn-primary h-14 w-full text-lg shadow-glow"
              >
                Start Extraction <Zap className="w-5 h-5 ml-2" />
              </button>
              <button
                onClick={() => setFile(null)}
                className="btn btn-ghost h-14 w-full sm:w-auto px-8 text-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* PROCESSING STATE */}
      {status === "processing" && (
        <div className="flex min-h-[420px] flex-col items-center justify-center rounded-[2.5rem] border border-[color:var(--border)] bg-[color:var(--card)] p-12 text-center shadow-card relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--bg-alt)] to-[color:var(--card)]"></div>
          
          <div className="relative z-10 w-full max-w-md flex flex-col items-center">
            <div className="relative mb-8">
               <div className="absolute inset-0 rounded-full border-4 border-accent border-t-transparent animate-spin"></div>
               <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[color:var(--bg-alt)] border border-[color:var(--border)]">
                  <Loader2 className="h-10 w-10 animate-spin text-accent" />
               </div>
            </div>
            <h3 className="font-display text-2xl font-bold tracking-tight text-[color:var(--fg)]">
              Extracting Frames...
            </h3>
            
            <div className="mt-10 w-full space-y-3">
               <div className="flex justify-between text-sm font-bold text-[color:var(--fg)]">
                 <span>Processing Video</span>
                 <span className="text-accent">{progress}%</span>
               </div>
               <div className="h-3 w-full overflow-hidden rounded-full bg-[color:var(--border)] shadow-inner">
                 <div
                   className="h-full bg-accent transition-all duration-300 ease-out shadow-glow"
                   style={{ width: `${progress}%` }}
                 />
               </div>
            </div>
            <p className="mt-6 rounded-full bg-[color:var(--bg-alt)] px-4 py-1.5 text-sm font-semibold text-muted border border-[color:var(--border)]">
              {frames.length} images captured natively
            </p>
          </div>
        </div>
      )}

      {/* DONE STATE */}
      {status === "done" && (
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-6 rounded-[2rem] border border-[color:var(--border)] bg-gradient-to-r from-[color:var(--card)] to-[color:var(--bg-alt)] p-8 shadow-card sm:flex-row sm:justify-between sm:p-10">
            <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-6">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-green-500/10 text-green-500 border border-green-500/20">
                <CheckCircle2 className="h-10 w-10" />
              </div>
              <div>
                <h3 className="font-display text-3xl font-bold text-[color:var(--fg)]">Success!</h3>
                <p className="mt-2 text-base text-muted font-medium">Extracted <span className="text-[color:var(--fg)] font-bold">{frames.length} frames</span> seamlessly.</p>
              </div>
            </div>
            <div className="mt-6 flex w-full flex-col gap-4 sm:mt-0 sm:w-auto sm:flex-row">
               <button onClick={downloadZip} className="btn btn-primary h-14 w-full px-8 text-base shadow-glow sm:w-auto">
                 <Download className="mr-2 h-5 w-5" /> Download ZIP
               </button>
            </div>
          </div>

          {/* Frame Gallery */}
          <div className="rounded-[2rem] border border-[color:var(--border)] bg-[color:var(--card)] p-8">
             <div className="mb-6 flex justify-between items-center">
                <h4 className="font-display text-xl font-bold">Preview Frames</h4>
                <span className="text-sm font-semibold text-muted bg-[color:var(--bg-alt)] px-3 py-1 rounded-full border border-[color:var(--border)]">Sample Output</span>
             </div>
             
             <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
               {frames.map((frame) => (
                 <div key={frame.id} className="group relative aspect-video sm:aspect-square overflow-hidden rounded-xl border border-[color:var(--border)] bg-[color:var(--bg-alt)] shadow-sm">
                   <img
                     src={frame.url}
                     alt={frame.name}
                     className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                   />
                   <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                     <p className="truncate text-xs font-semibold text-white/90">{frame.name}</p>
                   </div>
                 </div>
               ))}
             </div>
          </div>

          <div className="flex justify-center pb-10">
             <button
              onClick={() => {
                setStatus("idle");
                setFile(null);
                setFrames([]);
                setProgress(0);
              }}
              className="btn btn-ghost h-14 px-10 text-base rounded-full"
            >
              <FileVideo className="w-5 h-5 mr-2 opacity-70" /> Extract Another Video
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
