const fs = require('fs');

const allFiles = [
  'src/app/video-to-frame/page.tsx',
  'src/app/image-compressor/page.tsx',
  'src/app/image-resize/page.tsx',
  'src/app/image-crop/page.tsx',
  'src/app/video-resize/page.tsx',
  'src/app/video-crop/page.tsx',
  'src/app/video-compressor/page.tsx'
];

const newSuggestedTools = `      {/* 4. SUGGESTED TOOLS */}
      <section className="container-px py-[50px] w-full">
        <div className="mb-14 text-center sm:text-left">
           <span className="section-eyebrow">Keep Going</span>
           <h2 className="mt-4 font-display text-2xl font-bold tracking-tight sm:text-3xl">
             Suggested tools
           </h2>
           <p className="mt-3 text-muted text-base">Pair this with another tool to finish the job.</p>
        </div>
        
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl">
           <Link href="/video-crop" className="group rounded-xl border border-[color:var(--border)] bg-[color:var(--card)] p-6 transition-colors hover:border-accent flex flex-col justify-between">
              <div>
                <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-[color:var(--border)] bg-accent/5 text-accent mb-4">
                  <Crop className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-bold text-[color:var(--fg)] group-hover:text-accent transition-colors">Video Crop</h3>
                <p className="mt-2 text-sm text-muted">Crop, trim, and re-frame your videos instantly before extracting.</p>
              </div>
           </Link>
           
           <Link href="/video-compressor" className="group rounded-xl border border-[color:var(--border)] bg-[color:var(--card)] p-6 transition-colors hover:border-accent flex flex-col justify-between">
              <div>
                <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-[color:var(--border)] bg-accent/5 text-accent mb-4">
                  <FileArchive className="h-5 w-5" /> 
                </span>
                <h3 className="text-lg font-bold text-[color:var(--fg)] group-hover:text-accent transition-colors">Video Compressor</h3>
                <p className="mt-2 text-sm text-muted">Reduce video file size without losing visible quality.</p>
              </div>
           </Link>
           
           <Link href="/image-compressor" className="group rounded-xl border border-[color:var(--border)] bg-[color:var(--card)] p-6 transition-colors hover:border-accent flex flex-col justify-between">
              <div>
                <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-[color:var(--border)] bg-accent/5 text-accent mb-4">
                  <ImageIcon className="h-5 w-5" /> 
                </span>
                <h3 className="text-lg font-bold text-[color:var(--fg)] group-hover:text-accent transition-colors">Image Compressor</h3>
                <p className="mt-2 text-sm text-muted">Compress JPG, PNG and WebP files intelligently.</p>
              </div>
           </Link>
        </div>
      </section>
    </div>
  );
}`;

allFiles.forEach(f => {
  if (fs.existsSync(f)) {
    let content = fs.readFileSync(f, 'utf8');
    
    // REMOVE FAQ SECTION
    // The FAQ section starts with {/* 5. FAQ */} and ends right before {/* SUGGESTED TOOLS */} or {/* 4. SUGGESTED TOOLS */} or {/* 6. SUGGESTED TOOLS */}
    // It's a bit tricky with regex, let's use string manipulation or a specific regex
    content = content.replace(/\{\/\*\s*\d*\.?\s*FAQ\s*\*\/\}.*?(?=\{\/\*\s*(SUGGESTED TOOLS|\d*\.?\s*SUGGESTED TOOLS|CTA|5\.\s*CTA)\s*\*\/})/s, '');
    
    // On the 5 generated pages, replace the SUGGESTED TOOLS section with the new style.
    // The section starts at {/* SUGGESTED TOOLS */} and goes to the end of the file.
    // Wait, on video-to-frame it's {/* 4. SUGGESTED TOOLS */} and it also has a CTA section after it.
    // Let's just do it for all pages, but keeping CTA for video-to-frame.
    // Actually, I can just replace the block on the 5 newly generated tools (image-resize, image-crop, video-resize, video-crop, video-compressor)
    
    if (f.includes('image-resize') || f.includes('image-crop') || f.includes('video-resize') || f.includes('video-crop') || f.includes('video-compressor')) {
        content = content.replace(/\{\/\*\s*SUGGESTED TOOLS\s*\*\/\}.*$/s, newSuggestedTools);
    }

    // For video-to-frame and image-compressor, we also need to fix their Suggested Tools to use Lucide icons instead of emojis (since I used emoji in image-compressor and video-to-frame originally).
    // Actually, image-compressor has emojis, let's just replace its entire section too, but it doesn't have CTA.
    if (f.includes('image-compressor')) {
        content = content.replace(/\{\/\*\s*4\.\s*SUGGESTED TOOLS\s*\*\/\}.*$/s, newSuggestedTools);
    }
    
    // Ensure all required lucide icons are imported in the file.
    if (!content.includes('FileArchive')) content = content.replace('lucide-react";', 'FileArchive, lucide-react";').replace(', lucide-react";', '} from "lucide-react";');
    if (!content.includes('Crop')) content = content.replace('lucide-react";', 'Crop, lucide-react";').replace(', lucide-react";', '} from "lucide-react";');

    fs.writeFileSync(f, content);
    console.log('Processed ' + f);
  }
});
