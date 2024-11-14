import path, { dirname } from 'node:path';
import { fileURLToPath } from "url";
import { genDiff } from "../src/helpers/compareObjects.js";
import { readFile } from "../src/helpers/files.js";
import { params } from "../__fixtures__/params.js";


let __filename;
let __dirname;
let getFixturePath;

beforeEach(() => {
  __filename = fileURLToPath(import.meta.url);
  __dirname = dirname(__filename);
  getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

});


params.forEach(({ filename1, filename2, expected}) => {
  test("check compare json files", () => {
    const path1 = getFixturePath(filename1);
    const path2 = getFixturePath(filename2);
    expect(genDiff(path1, path2)).toEqual(expected);
  })
});