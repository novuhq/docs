import { copyFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

async function copyOpenApiFile() {
  try {
    const sourceFile = join(__dirname, '..', 'openapi.json');
    const targetDir = join(__dirname, '..', '.next/server');
    const targetFile = join(targetDir, 'openapi.json');

    // Ensure .next directory exists
    await mkdir(targetDir, { recursive: true });
    
    // Copy the file
    await copyFile(sourceFile, targetFile);
    console.log('Successfully copied openapi.json to .next directory');
  } catch (error) {
    console.error('Error copying openapi.json:', error);
    process.exit(1);
  }
}

copyOpenApiFile(); 