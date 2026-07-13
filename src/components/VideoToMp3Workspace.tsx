"use client";

import { useState, useRef } from "react";
import { UploadCloud, FileVideo, Download, Loader2, Music, Settings2, Zap } from "lucide-react";
import { FFmpeg } from "@ffmpeg/ffmpeg";
import { fetchFile, toBlobURL } from "@ffmpeg/util";

export function VideoToMp3Workspace() {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "processing" | "done">("idle");
  const [progress, setProgress] = useState(0);
  const [outputUrl, setOutputUrl] = useState<string>("");
  const [bitrate, setBitrate] = useState<string>("192k"); // 128k, 192k, 320k
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

  const extractAudio = async () => {
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
    
    ffmpeg.on('progress', ({ progress }) => {
      setProgress(Math.round(progress * 100));
    });

    const inputName = 'input.mp4';
    const outputName = 'output.mp3';

    await ffmpeg.writeFile(inputName, await fetchFile(file));

    // Run FFmpeg extraction
    // -vn: no video
    // -b:a: audio bitrate
    await ffmpeg.exec(['-i', inputName, '-vn', '-b:a', bitrate, outputName]);

    const data = await ffmpeg.readFile(outputName);
    const blob = new Blob([data as any], { type: 'audio/mp3' });
    const url = URL.createObjectURL(blob);
    
    setOutputUrl(url);
    setStatus("done");
  };

  const downloadFile = () => {
    const a = document.createElement('a');
    a.href = outputUrl;
    // Get original filename without extension and add .mp3
    const baseName = file?.name ? file.name.substring(0, file.name.lastIndexOf('.')) || file.name : 'audio';
    a.download = `${baseName}.mp3`;
    a.click();
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
                <div className="w-full h-full flex flex-col items-center justify-center bg-black/80">
                  <Music className="h-24 w-24 text-accent mb-6 animate-pulse" />
                  <audio src={outputUrl} controls className="w-10/12" />
                </div>
              ) : (
                <video src={URL.createObjectURL(file)} controls className="w-full h-full object-contain opacity-70" />
              )}
              
              {status === "processing" && (
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center z-10">
                  <Loader2 className="h-10 w-10 text-accent animate-spin mb-4" />
                  <div className="text-white font-medium text-lg">Extracting Audio...</div>
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
              Audio Settings
            </h3>
            
            <div className="space-y-6 flex-1">
              <div>
                <label className="text-sm font-medium mb-3 block">
                  Audio Quality (Bitrate)
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {["128k", "192k", "320k"].map((b) => (
                    <button
                      key={b}
                      onClick={() => setBitrate(b)}
                      disabled={status !== "idle"}
                      className={`py-2 px-3 rounded-lg text-sm font-medium transition-colors border ${
                        bitrate === b 
                          ? 'bg-accent/10 border-accent text-accent' 
                          : 'border-[color:var(--border)] text-muted hover:border-[color:var(--fg)]'
                      } ${status !== "idle" && 'opacity-50 cursor-not-allowed'}`}
                    >
                      {b}bps
                    </button>
                  ))}
                </div>
                <p className="text-xs text-muted mt-3">
                  {bitrate === "128k" && "Good quality, smaller file size."}
                  {bitrate === "192k" && "High quality, recommended balance."}
                  {bitrate === "320k" && "Best quality, larger file size."}
                </p>
              </div>
              
              <div className="rounded-lg bg-[color:var(--bg-alt)] p-4 border border-[color:var(--border)] text-sm text-muted">
                <div className="flex gap-2 items-start">
                  <Music className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <p>Audio extraction happens perfectly in your browser. Audio fidelity is preserved as closely as possible.</p>
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
                    Download MP3
                  </button>
                  <button 
                    onClick={() => {
                      setFile(null);
                      setStatus("idle");
                      setOutputUrl("");
                    }}
                    className="btn btn-ghost w-full h-12"
                  >
                    Extract Another
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  <button 
                    onClick={extractAudio}
                    disabled={status !== "idle"}
                    className="btn btn-primary w-full flex items-center justify-center gap-2 h-12 disabled:opacity-50"
                  >
                    {status === "idle" && (
                      <>
                        <Zap className="h-4 w-4" />
                        Extract to MP3
                      </>
                    )}
                    {status === "loading" && "Loading Engine..."}
                    {status === "processing" && "Extracting..."}
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
