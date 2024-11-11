import _ from "lodash";

const genDiff = (obj1, obj2) => {
  const compareResult = [];
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  for (const key of keys1) {
    if (keys2.includes(key)) {
      if (obj1[key] === obj2[key]) {
        compareResult.push({key, value: obj1[key], type: 'unchanged'});
      }
      if (obj1[key] !== obj2[key]) {
        compareResult.push({key, value1: obj1[key], value2: obj2[key], type: 'changed'});
      }
    } else {
      if (!keys2.includes(key)) {
        compareResult.push({key, value: obj1[key], type: 'deleted'});
      }
    }
  }
  for (const key of keys2) {
    if (!obj1[key]) {
      compareResult.push({key, value: obj2[key], type: 'added'});
    }
  }

  return _.sortBy(compareResult, [function (o) {
    return o.key;
  }]);
}

const createView = (compareResult) => {
 const resultStr = compareResult.map(({key, value, type, value1, value2 }) => {
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

    if(type === 'unchanged') {
      result = '   ' + result;
    }

    return result;
  })

  return `{\n${resultStr.join('\n')}\n}`;
}

export { genDiff, createView };