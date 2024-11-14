import { cwd } from 'node:process';
import path from 'node:path';
import fs from 'node:fs';


const getAbsoluteFilePath = (relativePath) => path.resolve(cwd(), relativePath);


const getFileExtension = (filePath) => {
  if (fs.existsSync(filePath)) {
    return path.extname(filePath).slice(1);
  }
  console.log('File does not exist');
  return null;
};

export { getAbsoluteFilePath, getFileExtension };
