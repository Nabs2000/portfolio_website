import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sourceFile = path.join(__dirname, '../attached_assets/Nabeel_Sabzwari_Resume_1756783957474.pdf');
const destFile = path.join(__dirname, '../public/Nabeel_Sabzwari_Resume.pdf');

// Create public directory if it doesn't exist
if (!fs.existsSync(path.dirname(destFile))) {
  fs.mkdirSync(path.dirname(destFile), { recursive: true });
}

// Copy the file
fs.copyFileSync(sourceFile, destFile);
console.log('Resume file copied to public directory');
