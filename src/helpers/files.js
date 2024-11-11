import { cwd } from 'node:process';
import path from 'node:path';
import fs from 'node:fs';


const getAbsoluteFilePath = (relativePath) => path.resolve(cwd(), relativePath);

const readFile = (absolutePath) => {
  if (fs.existsSync(absolutePath)) {
    return fs.readFileSync(absolutePath, 'utf8');
  }
  throw new Error(`File with path ${absolutePath} doesn't exist`);
};

const getFileExtension = (filePath) => {
  if (fs.existsSync(filePath)) {
    return path.extname(filePath);
  }
  console.log('File does not exist');
  return null;
};

export { getAbsoluteFilePath, readFile, getFileExtension };
