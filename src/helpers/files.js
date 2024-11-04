import { cwd } from 'node:process';
import path from 'node:path';
import fs from 'node:fs';



const getAbsoluteFilePath = (relativePath) => {
  return path.resolve(cwd(), relativePath);
}

const readFile = (absolutePath) => {
  if(fs.existsSync(absolutePath)) {
    return fs.readFileSync(absolutePath, 'utf8');
  } else {
    throw new Error(`File with path ${absolutePath} doesn't exist`)
  }
}

function getFileExtension(filePath) {
  // Ensure the file exists before trying to get the extension
  if (fs.existsSync(filePath)) {
    return path.extname(filePath);
  } else {
    console.log('File does not exist');
    return null;
  }
}

export { getAbsoluteFilePath, readFile, getFileExtension };