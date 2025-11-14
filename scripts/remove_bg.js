// Simple Node script using Jimp to convert near-white pixels to transparent
// Usage: node remove_bg.js

const Jimp = require('jimp');
const path = require('path');
const fs = require('fs');

const assets = path.resolve(__dirname, '..', 'src', 'assets');
const targets = ['Logo.png', 'Logo2.png'];
const threshold = 240; // 0-255, higher => more strict white

(async () => {
  for (const name of targets) {
    const p = path.join(assets, name);
    if (!fs.existsSync(p)) {
      console.log('Not found, skipping:', p);
      continue;
    }
    try {
      const image = await Jimp.read(p);
      image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
        const r = this.bitmap.data[idx + 0];
        const g = this.bitmap.data[idx + 1];
        const b = this.bitmap.data[idx + 2];
        // If near-white, set alpha to 0
        if (r >= threshold && g >= threshold && b >= threshold) {
          this.bitmap.data[idx + 3] = 0;
        }
      });
      const out = path.join(assets, name.replace(path.extname(name), '.transparent.png'));
      await image.writeAsync(out);
      console.log('Written:', out);
    } catch (err) {
      console.error('Error processing', p, err);
    }
  }
})();
