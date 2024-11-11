import path, { dirname } from 'node:path';
import { fileURLToPath } from "url";
import { genDiff } from "../src/helpers/compareObjects.js";
import { readFile } from "../src/helpers/files.js";


let __filename;
let __dirname;
let getFixturePath;

beforeEach(() => {
  __filename = fileURLToPath(import.meta.url);
  __dirname = dirname(__filename);
  getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

});

test("check compare files", () => {
  let obj1 = JSON.parse(readFile(getFixturePath('file1.json')));
  let obj2 = JSON.parse(readFile(getFixturePath('file2.json')));

  expect(genDiff(obj1, obj2)).toEqual([
    { key: 'follow', value: false, type: 'deleted' },
    { key: 'host', value: 'hexlet.io', type: 'unchanged' },
    { key: 'proxy', value: '123.234.53.22', type: 'deleted' },
    { key: 'timeout', value1: 50, value2: 20, type: 'changed' },
    { key: 'verbose', value: true, type: 'added' }
  ]);

  obj1 = JSON.parse(readFile(getFixturePath('file2.json')));
  obj2 = obj1;
  expect(genDiff(obj1, obj2)).toEqual([
    { key: 'host', value: 'hexlet.io', type: 'unchanged' },
    { key: 'timeout', value: 20, type: 'unchanged' },
    { key: 'verbose', value: true, type: 'unchanged' }
  ]);

  obj1 = JSON.parse(readFile(getFixturePath('file1.json')));
  obj2 = JSON.parse(readFile(getFixturePath('empty_json.json')));
  expect(genDiff(obj1, obj2)).toEqual([
    { key: 'follow', value: false, type: 'deleted' },
    { key: 'host', value: 'hexlet.io', type: 'deleted' },
    { key: 'proxy', value: "123.234.53.22", type: 'deleted' },
    { key: 'timeout', value: 50, type: 'deleted'},
  ]);

});