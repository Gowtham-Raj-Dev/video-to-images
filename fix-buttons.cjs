const fs = require('fs');

const files = [
  'src/app/image-resize/page.tsx',
  'src/app/image-crop/page.tsx',
  'src/app/video-resize/page.tsx',
  'src/app/video-crop/page.tsx',
  'src/app/video-compressor/page.tsx'
];

files.forEach(f => {
  if (fs.existsSync(f)) {
    let content = fs.readFileSync(f, 'utf8');
    
    // Replace "Coming Soon" button with "Start Now" anchor
    content = content.replace(
      /<button disabled className="btn btn-primary opacity-50 cursor-not-allowed text-center h-12 px-8">\s*Coming Soon\s*<\/button>/g,
      '<a href="#workspace" className="btn btn-primary flex items-center justify-center text-center h-12 px-8">Start Now</a>'
    );
    
    // Add id="workspace" to the wrapper
    content = content.replace(
      /<div className="relative w-full">/g,
      '<div id="workspace" className="relative w-full mt-12 scroll-mt-32">'
    );
    
    fs.writeFileSync(f, content);
    console.log('Fixed Coming Soon button in ' + f);
  }
});
