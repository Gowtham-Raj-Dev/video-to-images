const fs = require('fs');
const tools = [
  { path: 'image-crop', title: 'Image Crop', desc: 'Crop your images perfectly.', icon: 'Crop' },
  { path: 'video-resize', title: 'Video Resize', desc: 'Resize your videos for any platform.', icon: 'Minimize' },
  { path: 'video-crop', title: 'Video Crop', desc: 'Crop your videos easily.', icon: 'Crop' },
  { path: 'video-compressor', title: 'Video Compressor', desc: 'Compress your videos without losing quality.', icon: 'FileArchive' },
  { path: 'image-compressor', title: 'Image Compressor', desc: 'Compress images easily.', icon: 'FileArchive' }
];
const template = (title, desc, icon) => `import Link from 'next/link';
import { CheckCircle2, ChevronRight, Sparkles, Image as ImageIcon, Shield, Zap, Download, ${icon} } from 'lucide-react';

export default function ${title.replace(/ /g, '')}Page() {
  return (
    <div className="flex flex-col items-center w-full">
      <section className="w-full border-b border-[color:var(--border)] surface-alt py-[50px]">
        <div className="container-px">
          <div className="mt-4 flex flex-col items-center text-center gap-12 max-w-5xl mx-auto w-full">
            <div className="flex flex-col items-center w-full">
              <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--card)] p-1 pr-4 shadow-sm">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <${icon} className="h-4 w-4" />
                </span>
                <span className="text-xs font-semibold text-accent">New</span>
                <span className="text-xs font-semibold text-muted">• Tool</span>
              </div>
              <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl leading-[1.1]">
                ${title}
              </h1>
              <p className="mt-4 text-lg font-medium text-[color:var(--fg)]">
                ${desc}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row justify-center w-full sm:w-auto">
                <button disabled className="btn btn-primary opacity-50 cursor-not-allowed text-center h-12 px-8">
                  Coming Soon
                </button>
                <Link href="/#tools" className="btn btn-ghost h-12 px-8 flex items-center justify-center">
                  All Tools
                </Link>
              </div>
            </div>
            <div className="relative w-full">
               <div className="w-full max-w-3xl mx-auto h-[400px] border border-dashed border-[color:var(--border)] rounded-2xl flex flex-col items-center justify-center text-muted gap-4">
                  <${icon} className="h-10 w-10 opacity-50" />
                  <p className="font-medium">${title} tool is currently under development.</p>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}`;

tools.forEach(t => {
  const p = 'src/app/' + t.path + '/page.tsx';
  if (!fs.existsSync(p)) {
    fs.mkdirSync('src/app/' + t.path, { recursive: true });
    fs.writeFileSync(p, template(t.title, t.desc, t.icon));
    console.log('Created ' + p);
  }
});
