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
    // Replace escaped backticks with actual backticks
    content = content.split('\\`').join('`');
    // Fix Blob typing for data
    content = content.replace(/new Blob\(\[data\]/g, 'new Blob([data as any]');
    fs.writeFileSync(f, content);
    console.log('Fixed ' + f);
  }
});
