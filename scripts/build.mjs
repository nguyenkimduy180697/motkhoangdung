import fs from 'node:fs';
import path from 'node:path';

const rootDir = process.cwd();
const distDir = path.join(rootDir, 'dist');

console.log('Building motkhoangdung to ./dist...');

if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}
fs.mkdirSync(distDir, { recursive: true });

// Copy index.html
fs.copyFileSync(path.join(rootDir, 'index.html'), path.join(distDir, 'index.html'));

// Copy images
const srcImages = path.join(rootDir, 'images');
const destImages = path.join(distDir, 'images');
if (fs.existsSync(srcImages)) {
  fs.cpSync(srcImages, destImages, { recursive: true });
}

console.log('Build completed successfully.');
