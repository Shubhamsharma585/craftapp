const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const sizes = {
  'favicon-16x16.png': 16,
  'favicon-32x32.png': 32,
  'apple-touch-icon.png': 180,
  'logo192.png': 192,
  'logo512.png': 512
};

async function generateIcons() {
  const inputSvg = path.join(__dirname, '../public/safari-pinned-tab.svg');
  
  try {
    const svgBuffer = await fs.readFile(inputSvg);
    
    for (const [filename, size] of Object.entries(sizes)) {
      const outputPath = path.join(__dirname, '../public', filename);
      
      await sharp(svgBuffer)
        .resize(size, size)
        .png()
        .toFile(outputPath);
      
      console.log(`Generated ${filename}`);
    }

    // Generate favicon.ico (multi-size)
    const faviconPath = path.join(__dirname, '../public/favicon.ico');
    await sharp(svgBuffer)
      .resize(32, 32)
      .toFormat('ico')
      .toFile(faviconPath);
    
    console.log('Generated favicon.ico');
    console.log('All icons generated successfully!');
  } catch (error) {
    console.error('Error generating icons:', error);
  }
}

generateIcons(); 