"use client";

import { useState, useRef } from "react";
import { UploadCloud, CheckCircle2, Download, Image as ImageIcon, Loader2, Zap } from "lucide-react";

export default function ImageCompressor() {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle" | "processing" | "done">("idle");
  const [quality, setQuality] = useState<number>(0.7);
  const [compressedBlob, setCompressedBlob] = useState<Blob | null>(null);
  
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
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

  const compressImage = async () => {
    if (!file) return;
    setStatus("processing");

    const img = new Image();
    img.src = URL.createObjectURL(file);
    
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      
      if (ctx) {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        canvas.toBlob(
          (blob) => {
            if (blob) {
              setCompressedBlob(blob);
              setStatus("done");
            }
          },
          "image/jpeg",
          quality
        );
      }
    };
  };

  const downloadImage = () => {
    if (!compressedBlob || !file) return;
    const url = URL.createObjectURL(compressedBlob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `compressed_${file.name.replace(/\.[^/.]+$/, "")}.jpg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full space-y-8">
      {status === "idle" && !file && (
        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
          className="group relative flex min-h-[380px] w-full cursor-pointer flex-col items-center justify-center gap-5 rounded-3xl border-2 border-dashed border-[color:var(--border)] bg-[color:var(--card)]/50 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:border-accent hover:bg-accent/5 hover:shadow-card"
        >
          <div className="absolute inset-0 bg-[color:var(--accent)]/0 transition-colors duration-300 group-hover:bg-[color:var(--accent)]/[0.02] rounded-[2.5rem]"></div>
          <input
            id="workspace-file-input"
            type="file"
            accept="image/*"
            className="absolute inset-0 z-30 h-full w-full cursor-pointer opacity-0"
            onChange={handleFileChange}
          />
          <div className="relative z-20 pointer-events-none flex flex-col items-center">
            <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-[color:var(--bg)] shadow-sm border border-[color:var(--border)] group-hover:scale-105 group-hover:border-accent/30 transition-all duration-300">
              <UploadCloud className="h-8 w-8 text-[color:var(--fg)] group-hover:text-accent transition-colors" />
            </div>
            <h3 className="font-display text-2xl font-bold tracking-tight text-[color:var(--fg)]">
              Select or drop image here
            </h3>
            <p className="mt-2 text-sm text-muted max-w-sm leading-relaxed">
              JPG, PNG, or WEBP. Processed entirely on your device for maximum privacy.
            </p>
            <div className="mt-8 rounded-lg border border-[color:var(--border)] bg-[color:var(--bg)] px-5 py-2.5 text-sm font-semibold text-[color:var(--fg)] shadow-sm transition-colors group-hover:border-accent group-hover:text-accent">
              Choose Image File
            </div>
          </div>
        </div>
      )}

      {status === "idle" && file && (
        <div className="flex min-h-[420px] flex-col items-center justify-center rounded-[2.5rem] border border-[color:var(--border)] bg-[color:var(--card)] p-8 text-center shadow-card animate-in zoom-in-95 duration-500 relative overflow-hidden">
          <div className="relative z-10 flex flex-col items-center w-full max-w-xl">
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-[color:var(--bg-alt)] border border-[color:var(--border)]">
               <ImageIcon className="h-10 w-10 text-accent" />
            </div>
            <h3 className="font-display text-2xl font-bold text-[color:var(--fg)] truncate w-full px-4">{file.name}</h3>
            <p className="mt-2 text-sm text-muted font-medium">{(file.size / 1024).toFixed(2)} KB • Original Size</p>
            
            <div className="mt-10 w-full rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg-alt)] p-6">
               <label className="block text-sm font-bold uppercase tracking-wider text-muted mb-4">Compression Settings</label>
               <div className="flex flex-col sm:flex-row items-center gap-4">
                  <div className="flex-1 w-full flex items-center justify-between rounded-xl border border-[color:var(--border)] bg-[color:var(--card)] px-4 py-3">
                    <span className="font-semibold text-sm">Quality</span>
                    <select 
                      value={quality} 
                      onChange={(e) => setQuality(Number(e.target.value))}
                      className="bg-transparent font-bold text-accent outline-none cursor-pointer text-right"
                    >
                      <option className="bg-[color:var(--bg)] text-[color:var(--fg)]" value={0.9}>High (90%)</option>
                      <option className="bg-[color:var(--bg)] text-[color:var(--fg)]" value={0.7}>Medium (70%)</option>
                      <option className="bg-[color:var(--bg)] text-[color:var(--fg)]" value={0.5}>Low (50%)</option>
                    </select>
                  </div>
               </div>
            </div>
            
            <div className="mt-10 flex w-full flex-col sm:flex-row items-center gap-4">
              <button onClick={compressImage} className="btn btn-primary h-14 w-full text-lg shadow-glow">
                Start Compression <Zap className="w-5 h-5 ml-2" />
              </button>
              <button onClick={() => setFile(null)} className="btn btn-ghost h-14 w-full sm:w-auto px-8">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {status === "processing" && (
        <div className="flex min-h-[420px] flex-col items-center justify-center rounded-[2.5rem] border border-[color:var(--border)] bg-[color:var(--card)] p-12 text-center shadow-card">
          <Loader2 className="h-10 w-10 animate-spin text-accent mb-6" />
          <h3 className="font-display text-2xl font-bold tracking-tight text-[color:var(--fg)]">
            Compressing Image...
          </h3>
        </div>
      )}

      {status === "done" && compressedBlob && (
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-6 rounded-[2rem] border border-[color:var(--border)] bg-gradient-to-r from-[color:var(--card)] to-[color:var(--bg-alt)] p-8 shadow-card sm:flex-row sm:justify-between sm:p-10">
            <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-6">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-green-500/10 text-green-500 border border-green-500/20">
                <CheckCircle2 className="h-10 w-10" />
              </div>
              <div>
                <h3 className="font-display text-3xl font-bold text-[color:var(--fg)]">Success!</h3>
                <p className="mt-2 text-base text-muted font-medium">Reduced to <span className="text-green-500 font-bold">{(compressedBlob.size / 1024).toFixed(2)} KB</span></p>
              </div>
            </div>
            <div className="mt-6 flex w-full flex-col gap-4 sm:mt-0 sm:w-auto sm:flex-row">
               <button onClick={downloadImage} className="btn btn-primary h-14 w-full px-8 text-base shadow-glow sm:w-auto">
                 <Download className="mr-2 h-5 w-5" /> Download Image
               </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
