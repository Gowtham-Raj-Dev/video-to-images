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

allFiles.forEach(f => {
  if (fs.existsSync(f)) {
    let content = fs.readFileSync(f, 'utf8');
    
    // First, clean up any mangled imports from previous script
    content = content.replace(/from "FileArchive\} from "lucide-react";/g, 'from "lucide-react";');
    content = content.replace(/from "Crop\} from "lucide-react";/g, 'from "lucide-react";');
    
    // Extract the lucide-react import
    const lucideMatch = content.match(/import\s+\{([^}]+)\}\s+from\s+"lucide-react";/);
    if (lucideMatch) {
      let imports = lucideMatch[1].split(',').map(s => s.trim()).filter(s => s);
      
      if (!imports.includes('Crop')) imports.push('Crop');
      if (!imports.includes('FileArchive')) imports.push('FileArchive');
      if (!imports.includes('ImageIcon') && !imports.includes('Image as ImageIcon')) {
         // Some files use Image as ImageIcon
         imports.push('Image as ImageIcon');
      }
      
      const newImport = `import { ${imports.join(', ')} } from "lucide-react";`;
      content = content.replace(lucideMatch[0], newImport);
    }
    
    fs.writeFileSync(f, content);
    console.log('Fixed imports in ' + f);
  }
});
