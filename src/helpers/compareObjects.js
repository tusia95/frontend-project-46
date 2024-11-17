import _ from "lodash";
import fs from 'fs';
import { getAbsoluteFilePath, getFileExtension } from "./files.js";
import { jsonParser, yamlParser } from "./parsers.js";

const genDiff = (filepath1, filepath2) => {
  const ext1 = getFileExtension(filepath1);
  debugger;
  const ext2 = getFileExtension(filepath2);
  let ext;
  if (ext1 === ext2) {
    ext = ext1;
  } else {
    throw new Error('Files have different extension, couldn`t compare')
  }
  const absolutePath1 = getAbsoluteFilePath(filepath1);
  const absolutePath2 = getAbsoluteFilePath(filepath2);

  let obj1;
  let obj2;
  const file1Data = fs.readFileSync(absolutePath1, 'utf8');
  const file2Data = fs.readFileSync(absolutePath2, 'utf8');
  switch (ext) {
    case 'json':
      obj1 = jsonParser(file1Data);
      obj2 = jsonParser(file2Data);
      break;
    case 'yaml' || 'yml':
      obj1 = yamlParser(file1Data);
      obj2 = yamlParser(file2Data);
      break;
  }


  const compareResult = [];
  const getCompareObject = (obj1, obj2, depth) => {
      const keys1 = Object.keys(obj1);
      const keys2 = Object.keys(obj2);
      const keysUnion = _.union(keys1, keys2);
      for (const key of keysUnion) {
        if(typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
          getCompareObject(obj1[key], obj2[key],  depth + 1);
        }
        if (keys1.includes(key) && keys2.includes(key)) {
          if (obj1[key] === obj2[key]) {
            compareResult.push({key, value: obj1[key], type: 'unchanged'});
          }
          if (obj1[key] !== obj2[key]) {
            compareResult.push({key, value1: obj1[key], value2: obj2[key], type: 'changed'});
          }
        }
        if (keys1.includes(key) && !keys2.includes(key)) {
          compareResult.push({key, value: obj1[key], type: 'deleted'});
        }

        if (!keys1.includes(key) && keys2.includes(key)) {
          compareResult.push({key, value: obj2[key], type: 'added'});
        }
      }
      return compareResult;
    }
  const result = getCompareObject(obj1, obj2, 0);
  console.log(result,'RES');
  // return _.sortBy(compareResult, [function (o) {
  //   return o.key;
  // }]);
}

const createView = (compareResult) => {
  const resultStr = compareResult.map(({key, value, type, value1, value2}) => {
    let result = key + ': ' + value;
    if (type === 'changed') {
      result = ` - ${key}: ${value1}\n + ${key}: ${value2}`;
    }

    if (type === 'deleted') {
      result = ' - ' + result;
    }

    if (type === 'added') {
      result = ' + ' + result;
    }

    if (type === 'unchanged') {
      result = '   ' + result;
    }

    return result;
  })

  return `{\n${resultStr.join('\n')}\n}`;
}

export { genDiff, createView };