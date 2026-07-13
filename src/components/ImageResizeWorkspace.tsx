"use client";

import { useState, useRef } from "react";
import { UploadCloud, ImageIcon, Download, Loader2, Minimize, Settings2 } from "lucide-react";

export function ImageResizeWorkspace() {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle" | "processing" | "done">("idle");
  const [outputUrl, setOutputUrl] = useState<string>("");
  const [width, setWidth] = useState<number>(1920);
  const [height, setHeight] = useState<number>(1080);
  const [maintainRatio, setMaintainRatio] = useState<boolean>(true);
  const [originalRatio, setOriginalRatio] = useState<number>(1);
  const [quality, setQuality] = useState<number>(0.8);
  const imageRef = useRef<HTMLImageElement>(null);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      loadFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      loadFile(e.target.files[0]);
    }
  };

  const loadFile = (f: File) => {
    setFile(f);
    const url = URL.createObjectURL(f);
    const img = new Image();
    img.onload = () => {
      setWidth(img.width);
      setHeight(img.height);
      setOriginalRatio(img.width / img.height);
    };
    img.src = url;
  };

  const handleWidthChange = (val: number) => {
    setWidth(val);
    if (maintainRatio) {
      setHeight(Math.round(val / originalRatio));
    }
  };

  const handleHeightChange = (val: number) => {
    setHeight(val);
    if (maintainRatio) {
      setWidth(Math.round(val * originalRatio));
    }
  };

  const resizeImage = async () => {
    if (!file) return;
    setStatus("processing");

    // Small delay to show UI state
    await new Promise(r => setTimeout(r, 500));

    const img = new Image();
    const url = URL.createObjectURL(file);
    
    await new Promise((resolve) => {
      img.onload = resolve;
      img.src = url;
    });

    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    ctx.drawImage(img, 0, 0, width, height);
    
    let exportType = file.type || 'image/jpeg';
    // Convert PNG to WEBP to support quality compression while maintaining transparency
    if (exportType === 'image/png') {
        exportType = 'image/webp';
    }
    
    const resizedUrl = canvas.toDataURL(exportType, quality);
    setOutputUrl(resizedUrl);
    setStatus("done");
  };

  const downloadFile = () => {
    const a = document.createElement('a');
    a.href = outputUrl;
    
    let extension = 'jpg';
    if (file?.type === 'image/png') extension = 'webp';
    else if (file?.type === 'image/webp') extension = 'webp';
    
    a.download = `resized_${file?.name ? file.name.split('.')[0] : 'image'}.${extension}`;
    a.click();
  };

  return (
    <div className="w-full max-w-4xl mx-auto rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] shadow-card overflow-hidden">
      {!file ? (
        <div 
          className="p-12 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-[color:var(--bg-alt)] transition-colors min-h-[400px]"
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
          onClick={() => document.getElementById("image-upload")?.click()}
        >
          <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mb-6">
            <UploadCloud className="h-8 w-8 text-accent" />
          </div>
          <h3 className="text-xl font-bold mb-2">Drop your image here</h3>
          <p className="text-muted max-w-md">
            JPG, PNG, or WebP files are supported.
          </p>
          <button className="mt-8 btn btn-primary px-8">Browse Files</button>
          <input 
            id="image-upload" 
            type="file" 
            accept="image/*" 
            className="hidden" 
            onChange={handleFileChange}
          />
        </div>
      ) : (
        <div className="flex flex-col md:flex-row min-h-[500px]">
          <div className="w-full md:w-2/3 bg-[color:var(--bg-alt)] p-6 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-[color:var(--border)]">
            <div className="relative w-full max-w-lg aspect-square sm:aspect-video bg-[color:var(--border)]/20 rounded-lg overflow-hidden flex items-center justify-center shadow-inner">
              {status === "done" && outputUrl ? (
                <img src={outputUrl} alt="Resized" className="max-w-full max-h-full object-contain" />
              ) : (
                <img src={URL.createObjectURL(file)} alt="Original" className="max-w-full max-h-full object-contain opacity-80" />
              )}
              
              {status === "processing" && (
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex flex-col items-center justify-center z-10 text-white">
                  <Loader2 className="h-10 w-10 text-accent animate-spin mb-4" />
                  <div className="font-medium text-lg">Resizing Image...</div>
                </div>
              )}
            </div>
            
            <div className="mt-4 flex items-center justify-between w-full max-w-lg px-2">
              <div className="flex items-center gap-2 text-sm text-muted">
                <ImageIcon className="h-4 w-4" />
                <span className="truncate max-w-[200px]">{file.name}</span>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/3 p-6 flex flex-col">
            <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
              <Settings2 className="h-5 w-5 text-accent" />
              Dimensions
            </h3>
            
            <div className="space-y-6 flex-1">
              <div>
                <label className="text-sm font-medium mb-3 block">
                  Quick Presets
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { label: '1080p (1920x1080)', w: 1920, h: 1080 },
                    { label: '720p (1280x720)', w: 1280, h: 720 },
                    { label: 'Square (1080x1080)', w: 1080, h: 1080 },
                    { label: 'Portrait (1080x1350)', w: 1080, h: 1350 }
                  ].map(preset => (
                    <button
                      key={preset.label}
                      onClick={() => {
                        setWidth(preset.w);
                        setHeight(preset.h);
                        setMaintainRatio(false);
                      }}
                      disabled={status !== "idle"}
                      className={`py-2 px-3 text-sm rounded-md border transition-colors ${
                        width === preset.w && height === preset.h
                          ? 'border-accent bg-accent/10 text-accent font-medium'
                          : 'border-[color:var(--border)] hover:border-[color:var(--fg)] text-muted hover:text-[color:var(--fg)]'
                      } ${status !== "idle" && 'opacity-50 cursor-not-allowed'}`}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Width (px)</label>
                <input 
                  type="number" 
                  value={width}
                  onChange={(e) => handleWidthChange(Number(e.target.value))}
                  disabled={status !== "idle"}
                  className="w-full h-10 px-3 rounded-md border border-[color:var(--border)] bg-[color:var(--bg)] outline-none focus:border-accent transition-colors"
                />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Height (px)</label>
                  <input 
                    type="number" 
                    value={height}
                    onChange={(e) => handleHeightChange(Number(e.target.value))}
                    disabled={status !== "idle"}
                    className="w-full h-10 px-3 rounded-md border border-[color:var(--border)] bg-[color:var(--bg)] outline-none focus:border-accent transition-colors"
                  />
                </div>
              </div>
              
              <label className="flex items-center gap-2 cursor-pointer text-sm">
                <input 
                  type="checkbox" 
                  checked={maintainRatio}
                  onChange={(e) => setMaintainRatio(e.target.checked)}
                  disabled={status !== "idle"}
                  className="accent-accent w-4 h-4"
                />
                Maintain aspect ratio
              </label>

              <div className="pt-4 mt-2 border-t border-[color:var(--border)]">
                <label className="text-sm font-medium mb-3 flex items-center justify-between">
                  <span>Quality (Reduces MB size)</span>
                  <span className="text-accent font-bold">{Math.round(quality * 100)}%</span>
                </label>
                <input 
                  type="range"
                  min="0.1"
                  max="1"
                  step="0.05"
                  value={quality}
                  onChange={(e) => setQuality(Number(e.target.value))}
                  disabled={status !== "idle"}
                  className="w-full accent-accent h-2 bg-[color:var(--border)] rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-muted mt-2 font-medium">
                  <span>Smallest Size</span>
                  <span>Highest Quality</span>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              {status === "done" ? (
                <div className="flex flex-col gap-3">
                  <button onClick={downloadFile} className="btn btn-primary w-full flex items-center justify-center gap-2 h-12">
                    <Download className="h-4 w-4" /> Download Image
                  </button>
                  <button onClick={() => { setFile(null); setStatus("idle"); setOutputUrl(""); }} className="btn btn-ghost w-full h-12">
                    Resize Another
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  <button onClick={resizeImage} disabled={status !== "idle"} className="btn btn-primary w-full flex items-center justify-center gap-2 h-12 disabled:opacity-50">
                    {status === "processing" ? "Resizing..." : "Apply Resize"}
                  </button>
                  <button 
                    onClick={() => { setFile(null); setStatus("idle"); setOutputUrl(""); }} 
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
