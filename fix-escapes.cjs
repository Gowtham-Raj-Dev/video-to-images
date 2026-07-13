const fs = require('fs');

const files = [
  'src/components/ImageResizeWorkspace.tsx',
  'src/components/ImageCropWorkspace.tsx',
  'src/components/VideoCropWorkspace.tsx',
  'src/components/VideoResizeWorkspace.tsx',
  'src/components/VideoCompressorWorkspace.tsx'
];

files.forEach(f => {
  if (fs.existsSync(f)) {
    let content = fs.readFileSync(f, 'utf8');
    
    // Fix \${ to ${
    content = content.replace(/\\\$\{/g, '${');
    
    // Fix any remaining \` to `
    content = content.replace(/\\`/g, '`');
    
    fs.writeFileSync(f, content);
    console.log('Fixed syntax escapes in ' + f);
  }
});
