"use client";

import { useState, useRef, useEffect } from "react";
import { UploadCloud, ImageIcon, Download, Loader2, Crop, Settings2 } from "lucide-react";
import ReactCrop, { type Crop as CropType, type PixelCrop, centerCrop, makeAspectCrop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

export function ImageCropWorkspace() {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle" | "processing" | "done">("idle");
  const [outputUrl, setOutputUrl] = useState<string>("");
  const [aspectRatio, setAspectRatio] = useState<"1:1" | "16:9" | "4:3" | "free">("1:1");
  const [crop, setCrop] = useState<CropType>();
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>();
  const [imageUrl, setImageUrl] = useState<string>("");
  const imgRef = useRef<HTMLImageElement>(null);

  // Create a stable object URL for the selected file. Doing this inside render
  // would generate a new URL on every state change (e.g. while dragging the crop),
  // forcing the image to reload and resetting the crop box.
  useEffect(() => {
    if (!file) {
      setImageUrl("");
      return;
    }
    const url = URL.createObjectURL(file);
    setImageUrl(url);
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
    if (aspectRatio === "4:3") return 4 / 3;
    return undefined;
  };

  const handleAspectChange = (val: string) => {
    setAspectRatio(val as any);
    if (!imgRef.current) return;
    
    const { width, height } = imgRef.current;
    if (!width || !height) return;

    let aspect: number | undefined;
    if (val === "1:1") aspect = 1;
    else if (val === "16:9") aspect = 16 / 9;
    else if (val === "4:3") aspect = 4 / 3;

    if (aspect) {
      const newCrop = centerCrop(
        makeAspectCrop({ unit: '%', width: 90 }, aspect, width, height),
        width,
        height
      );
      setCrop(newCrop);
    }
  };

  function onImageLoad(e: React.SyntheticEvent<HTMLImageElement>) {
    const { width, height } = e.currentTarget;
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

  const cropImage = async () => {
    if (!file || !completedCrop || !imgRef.current) return;
    setStatus("processing");

    // Small delay to show UI state
    await new Promise(r => setTimeout(r, 500));

    const image = imgRef.current;
    const canvas = document.createElement('canvas');
    
    // Scale crop to the natural image size
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    
    const cropWidth = completedCrop.width * scaleX;
    const cropHeight = completedCrop.height * scaleY;
    
    if (!cropWidth || !cropHeight) {
        setStatus("idle");
        return;
    }

    canvas.width = cropWidth;
    canvas.height = cropHeight;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    ctx.imageSmoothingQuality = "high";
    
    ctx.drawImage(
      image,
      completedCrop.x * scaleX,
      completedCrop.y * scaleY,
      cropWidth,
      cropHeight,
      0,
      0,
      cropWidth,
      cropHeight
    );
    
    const croppedUrl = canvas.toDataURL(file.type || 'image/jpeg', 0.95);
    setOutputUrl(croppedUrl);
    setStatus("done");
  };

  const downloadFile = () => {
    const a = document.createElement('a');
    a.href = outputUrl;
    a.download = `cropped_${file?.name || 'image.jpg'}`;
    a.click();
  };

  return (
    <div className="w-full max-w-4xl mx-auto rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] shadow-card overflow-hidden">
      {!file ? (
        <div 
          className="p-12 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-[color:var(--bg-alt)] transition-colors min-h-[400px]"
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
          onClick={() => document.getElementById("image-upload-crop")?.click()}
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
            id="image-upload-crop" 
            type="file" 
            accept="image/*" 
            className="hidden" 
            onChange={handleFileChange}
          />
        </div>
      ) : (
        <div className="flex flex-col md:flex-row min-h-[500px]">
          <div className="w-full md:w-2/3 bg-[color:var(--bg-alt)] p-6 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-[color:var(--border)] overflow-hidden">
            <div className="relative w-full max-w-lg aspect-square sm:aspect-video bg-[color:var(--border)]/20 rounded-lg overflow-hidden flex items-center justify-center shadow-inner">
              {status === "done" && outputUrl ? (
                <img src={outputUrl} alt="Cropped" className="max-w-full max-h-full object-contain" />
              ) : (
                <div className="relative w-full h-full flex items-center justify-center bg-black/5 p-4 overflow-hidden touch-none">
                  <ReactCrop
                    crop={crop}
                    onChange={(c) => setCrop(c)}
                    onComplete={(c) => setCompletedCrop(c)}
                    aspect={getAspect()}
                  >
                    {imageUrl && (
                      <img
                        ref={imgRef}
                        src={imageUrl}
                        alt="Original"
                        style={{ maxHeight: '60vh', maxWidth: '100%' }}
                        onLoad={onImageLoad}
                      />
                    )}
                  </ReactCrop>
                </div>
              )}
              
              {status === "processing" && (
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex flex-col items-center justify-center z-10 text-white">
                  <Loader2 className="h-10 w-10 text-accent animate-spin mb-4" />
                  <div className="font-medium text-lg">Cropping Image...</div>
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
              Crop Settings
            </h3>
            
            <div className="space-y-6 flex-1">
              <div>
                <label className="text-sm font-medium mb-3 block">Aspect Ratio</label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { label: 'Square (1:1)', val: '1:1' },
                    { label: 'Landscape (16:9)', val: '16:9' },
                    { label: 'Standard (4:3)', val: '4:3' },
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
                    <Download className="h-4 w-4" /> Download Cropped Image
                  </button>
                  <button onClick={() => { setFile(null); setStatus("idle"); setOutputUrl(""); }} className="btn btn-ghost w-full h-12">
                    Crop Another
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  <button onClick={cropImage} disabled={status !== "idle" || !completedCrop} className="btn btn-primary w-full flex items-center justify-center gap-2 h-12 disabled:opacity-50">
                    {status === "processing" ? "Cropping..." : "Apply Crop"}
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
