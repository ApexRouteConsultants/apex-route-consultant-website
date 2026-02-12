
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('Import URL:', import.meta.url);
console.log('Resolved __filename:', __filename);
console.log('Resolved __dirname:', __dirname);
console.log('Constructed path:', path.join(__dirname, 'dist', 'index.html'));

try {
    const stats = fs.statSync(path.join(__dirname, 'dist', 'index.html'));
    console.log('File exists. Stats:', stats);
} catch (e) {
    console.error('File access failed:', e);
}
