const fs = require('fs');

const tools = [
  { 
    path: 'image-resize', 
    title: 'Image Resize', 
    desc: 'Quickly scale your images to the exact dimensions you need.',
    longDesc: 'Instantly resize your JPG, PNG, and WebP images. Change dimensions flawlessly while preserving quality and aspect ratio. Fast, free, and completely processed in your browser.',
    icon: 'Minimize',
    feature1: { title: 'Pixel Perfect Resizing', desc: 'Specify exact pixel dimensions or scale by percentage instantly.', icon: 'Minimize' },
    feature2: { title: '100% Private & Secure', desc: 'Your images never leave your device. The entire process runs inside your local browser.', icon: 'Shield' },
    feature3: { title: 'Maintains Aspect Ratio', desc: 'Smart resizing that automatically preserves your image proportions.', icon: 'ImageIcon' },
    feature4: { title: 'Lightning Fast', desc: 'Native browser processing ensures instant resizing with zero upload times.', icon: 'Zap' },
    step1: 'Choose an image from your device.',
    step2: 'Set your desired width and height.',
    step3: 'Download the resized image instantly.'
  },
  { 
    path: 'image-crop', 
    title: 'Image Crop', 
    desc: 'Crop your images perfectly.',
    longDesc: 'Easily crop your photos and graphics. Remove unwanted areas and focus on what matters. Fast, free, and completely processed in your browser.',
    icon: 'Crop',
    feature1: { title: 'Precise Cropping', desc: 'Drag and drop bounding boxes to crop exactly what you need.', icon: 'Crop' },
    feature2: { title: '100% Private & Secure', desc: 'Your images never leave your device. The entire process runs inside your local browser.', icon: 'Shield' },
    feature3: { title: 'Freeform & Ratios', desc: 'Crop freely or snap to popular social media aspect ratios.', icon: 'ImageIcon' },
    feature4: { title: 'Instant Processing', desc: 'Native browser cropping with zero quality loss or waiting time.', icon: 'Zap' },
    step1: 'Upload your image.',
    step2: 'Adjust the crop box over your desired area.',
    step3: 'Click crop and download the result.'
  },
  { 
    path: 'video-resize', 
    title: 'Video Resize', 
    desc: 'Resize your videos for any platform.',
    longDesc: 'Scale and resize your MP4 or WebM videos. Perfect for adapting content for Instagram, TikTok, or YouTube Shorts. Fast, free, and completely processed in your browser.',
    icon: 'Minimize',
    feature1: { title: 'Any Aspect Ratio', desc: 'Easily convert landscape videos to portrait formats instantly.', icon: 'Minimize' },
    feature2: { title: '100% Private & Secure', desc: 'Your videos never leave your device. The entire process runs inside your local browser.', icon: 'Shield' },
    feature3: { title: 'High Quality Output', desc: 'Rescales your video while preserving the maximum visual fidelity possible.', icon: 'Video' },
    feature4: { title: 'Fast Rendering', desc: 'Powered by WebAssembly for near-native encoding speeds.', icon: 'Zap' },
    step1: 'Select a video file.',
    step2: 'Choose a new dimension or aspect ratio.',
    step3: 'Export and download the resized video.'
  },
  { 
    path: 'video-crop', 
    title: 'Video Crop', 
    desc: 'Crop your videos easily.',
    longDesc: 'Crop out unwanted sections of your videos. Frame your subjects perfectly for social media. Fast, free, and completely processed in your browser.',
    icon: 'Crop',
    feature1: { title: 'Visual Cropping', desc: 'Use intuitive visual handles to crop exactly the frame you want.', icon: 'Crop' },
    feature2: { title: '100% Private & Secure', desc: 'Your videos never leave your device. The entire process runs inside your local browser.', icon: 'Shield' },
    feature3: { title: 'Timeline Preview', desc: 'Preview your cropped frame across the entire video timeline.', icon: 'Video' },
    feature4: { title: 'No Watermarks', desc: 'Export clean, cropped videos without any intrusive branding.', icon: 'CheckCircle2' },
    step1: 'Load a video into the workspace.',
    step2: 'Adjust the crop boundaries visually.',
    step3: 'Render and save the cropped video.'
  },
  { 
    path: 'video-compressor', 
    title: 'Video Compressor', 
    desc: 'Compress your videos without losing quality.',
    longDesc: 'Drastically reduce your video file sizes. Optimize MP4 files for web, email, or Discord without noticeable quality loss. Fast, free, and processed locally.',
    icon: 'FileArchive',
    feature1: { title: 'Smart Compression', desc: 'Advanced algorithms to shrink file size while preserving quality.', icon: 'FileArchive' },
    feature2: { title: '100% Private & Secure', desc: 'Your videos never leave your device. The entire process runs inside your local browser.', icon: 'Shield' },
    feature3: { title: 'Target File Size', desc: 'Specify an exact target MB size for strict platform limits.', icon: 'Video' },
    feature4: { title: 'WebAssembly Powered', desc: 'Incredibly fast local encoding directly on your machine.', icon: 'Zap' },
    step1: 'Upload your heavy video file.',
    step2: 'Select your target quality or file size.',
    step3: 'Compress and download the optimized video.'
  }
];

const template = (t) => `import Link from "next/link";
import { CheckCircle2, ChevronRight, Sparkles, Image as ImageIcon, Shield, Zap, Download, Minimize, Crop, Video, FileArchive } from "lucide-react";

export default function ${t.title.replace(/ /g, '')}Page() {
  return (
    <div className="flex flex-col items-center w-full">
      
      {/* 1. HERO SECTION & WORKSPACE */}
      <section className="w-full border-b border-[color:var(--border)] surface-alt py-[50px]">
        <div className="container-px">
          <div className="mt-4 flex flex-col items-center text-center gap-12 max-w-5xl mx-auto w-full">
            <div className="flex flex-col items-center w-full">
              
              <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--card)] p-1 pr-4 shadow-sm">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <${t.icon} className="h-4 w-4" />
                </span>
                <span className="text-xs font-semibold text-accent">New</span>
                <span className="text-xs font-semibold text-muted">• Tool</span>
              </div>
              
              <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl leading-[1.1]">
                ${t.title}
              </h1>
              
              <p className="mt-4 text-lg font-medium text-[color:var(--fg)]">
                ${t.desc}
              </p>
              
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
                ${t.longDesc}
              </p>
              
              <div className="mt-8 flex flex-col gap-3 sm:flex-row justify-center w-full sm:w-auto">
                <button disabled className="btn btn-primary opacity-50 cursor-not-allowed text-center h-12 px-8">
                  Coming Soon
                </button>
                <Link href="/#tools" className="btn btn-ghost h-12 px-8 flex items-center justify-center">
                  All Tools
                </Link>
              </div>
              
              <ul className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-muted">
                {["No watermark", "No signup", "100% private"].map((item) => (
                  <li key={item} className="inline-flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-accent" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Content - Workspace */}
            <div className="relative w-full">
               <div className="w-full max-w-4xl mx-auto h-[400px] border border-dashed border-[color:var(--border)] rounded-2xl flex flex-col items-center justify-center text-muted gap-4 bg-[color:var(--card)] shadow-sm">
                  <${t.icon} className="h-10 w-10 opacity-50 text-accent" />
                  <p className="font-medium text-lg">${t.title} tool is currently under development.</p>
                  <p className="text-sm opacity-70">We are working hard to bring this native browser experience to you soon.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURES GRID */}
      <section className="container-px py-[50px] w-full">
        <div className="mb-14 text-center sm:text-left">
           <span className="section-eyebrow">Features</span>
           <h2 className="mt-4 font-display text-2xl font-bold tracking-tight sm:text-3xl">
             Everything in the ${t.title} tool
           </h2>
           <p className="mt-3 text-muted text-base">Purpose-built controls that make the job fast, precise and effortless.</p>
        </div>
        
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "${t.feature1.title}", desc: "${t.feature1.desc}", icon: <${t.feature1.icon} /> },
            { title: "${t.feature2.title}", desc: "${t.feature2.desc}", icon: <${t.feature2.icon} /> },
            { title: "${t.feature3.title}", desc: "${t.feature3.desc}", icon: <${t.feature3.icon} /> },
            { title: "${t.feature4.title}", desc: "${t.feature4.desc}", icon: <${t.feature4.icon} /> },
          ].map((f) => (
            <div key={f.title} className="h-full rounded-xl border border-[color:var(--border)] bg-[color:var(--card)] p-6 transition-colors hover:border-accent">
              <span className="icon-tile h-11 w-11 mb-4">
                <div className="h-5 w-5 text-accent">{f.icon}</div>
              </span>
              <h3 className="mt-4 text-base font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. BENEFITS & FORMATS */}
      <section className="container-px py-[50px] w-full">
        <div className="grid gap-5 lg:grid-cols-2">
          {/* Benefits */}
          <div className="h-full rounded-xl border border-[color:var(--border)] bg-[color:var(--card)] p-8">
            <h3 className="font-display text-xl font-bold">Why you'll love it</h3>
            <ul className="mt-6 space-y-4">
              {[
                "Browser-native performance",
                "No limits on file sizes or counts",
                "Works completely offline after loading",
                "Zero risk of data leaks (files stay with you)",
                "No annoying watermarks",
                "Absolutely free forever"
              ].map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-muted">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Formats */}
          <div className="h-full rounded-xl border border-[color:var(--border)] bg-[color:var(--card)] p-8">
             <h3 className="font-display text-xl font-bold">Supported Formats</h3>
             <p className="mt-4 text-muted">Built for modern web standards, supporting the formats you actually use.</p>
             
             <div className="mt-8 space-y-6">
                <div>
                   <h4 className="text-sm font-semibold uppercase tracking-wider text-[color:var(--fg)]">Inputs</h4>
                   <div className="mt-3 flex flex-wrap gap-2">
                     {["MP4", "WEBM", "MOV", "JPG", "PNG", "WEBP"].map(f => (
                       <span key={f} className="rounded bg-[color:var(--bg-alt)] px-2.5 py-1 text-sm font-medium border border-[color:var(--border)]">{f}</span>
                     ))}
                   </div>
                </div>
                <div>
                   <h4 className="text-sm font-semibold uppercase tracking-wider text-[color:var(--fg)]">Outputs</h4>
                   <div className="mt-3 flex flex-wrap gap-2">
                     {["JPG", "PNG", "WEBP", "MP4"].map(f => (
                       <span key={f} className="rounded bg-[color:var(--bg-alt)] px-2.5 py-1 text-sm font-medium border border-[color:var(--border)] text-accent">{f}</span>
                     ))}
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS */}
      <section className="w-full surface-alt py-[50px] border-y border-[color:var(--border)]">
        <div className="container-px">
          <div className="text-center">
             <span className="section-eyebrow">Simple Workflow</span>
             <h2 className="mt-4 font-display text-2xl font-bold tracking-tight sm:text-3xl">
               How to use the ${t.title}
             </h2>
          </div>
          
          <div className="mt-14 grid gap-8 sm:grid-cols-3 relative before:absolute before:inset-x-0 before:top-6 before:hidden before:h-px before:bg-[color:var(--border)] sm:before:block">
            {[
              { step: 1, title: "Upload", desc: "${t.step1}" },
              { step: 2, title: "Adjust", desc: "${t.step2}" },
              { step: 3, title: "Export", desc: "${t.step3}" }
            ].map((s) => (
              <div key={s.step} className="relative flex flex-col items-center text-center">
                 <span className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-[color:var(--bg-alt)] bg-[color:var(--fg)] text-lg font-bold text-[color:var(--bg)] shadow-sm z-10">
                   {s.step}
                 </span>
                 <h3 className="mt-6 text-lg font-semibold">{s.title}</h3>
                 <p className="mt-2 text-sm text-muted">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQ */}
      <section className="container-px py-[50px] w-full max-w-3xl mx-auto">
         <div className="text-center mb-10">
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
              Frequently Asked Questions
            </h2>
         </div>
         <div className="space-y-4">
            {[
              { q: "Is this tool really 100% free?", a: "Yes. All processing is done in your browser using local computing power, so we don't have server costs to pass on to you. It's completely free forever." },
              { q: "Are my files uploaded to a server?", a: "No. Your files never leave your device. The entire conversion and processing workflow happens within your local browser sandbox." },
              { q: "Will there be a watermark?", a: "Never. We believe in providing clean, professional tools without holding your content hostage behind a paywall or watermark." },
              { q: "Does it work on mobile?", a: "Yes, our tools are responsive and built with WebAssembly to ensure they work smoothly across modern mobile browsers." }
            ].map((faq, i) => (
              <div key={i} className="rounded-xl border border-[color:var(--border)] bg-[color:var(--card)] p-6">
                 <h4 className="font-semibold">{faq.q}</h4>
                 <p className="mt-2 text-sm text-muted leading-relaxed">{faq.a}</p>
              </div>
            ))}
         </div>
      </section>

      {/* SUGGESTED TOOLS */}
      <section className="container-px py-[50px] w-full">
        <div className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="section-eyebrow">Keep Going</span>
            <h2 className="mt-4 font-display text-2xl font-bold tracking-tight sm:text-3xl">
              More Free Tools
            </h2>
          </div>
          <Link href="/#tools" className="group inline-flex items-center gap-1 text-sm font-semibold text-accent hover:opacity-80 transition-opacity">
            View all tools <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { name: "Image Compressor", desc: "Reduce image file size instantly.", href: "/image-compressor", icon: <FileArchive /> },
            { name: "Video to Frame", desc: "Extract high quality frames from video.", href: "/video-to-frame", icon: <Sparkles /> },
            { name: "Video Compressor", desc: "Compress video files offline.", href: "/video-compressor", icon: <Video /> },
          ].map((tool) => (
            <Link 
              key={tool.name} 
              href={tool.href}
              className="group flex flex-col rounded-xl border border-[color:var(--border)] bg-[color:var(--card)] p-5 transition-colors hover:border-[color:var(--fg)]"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[color:var(--bg-alt)] text-[color:var(--fg)] transition-colors group-hover:bg-[color:var(--fg)] group-hover:text-[color:var(--bg)]">
                  <div className="h-5 w-5">{tool.icon}</div>
                </span>
                <div>
                  <h3 className="font-semibold text-sm">{tool.name}</h3>
                  <p className="text-xs text-muted mt-0.5">{tool.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}`;

tools.forEach(t => {
  const p = 'src/app/' + t.path + '/page.tsx';
  fs.mkdirSync('src/app/' + t.path, { recursive: true });
  fs.writeFileSync(p, template(t));
  console.log('Created ' + p);
});
