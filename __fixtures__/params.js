export const params = [
  { filename1: 'file1.json', filename2: 'file2.json', expected: [
      { key: 'follow', value: false, type: 'deleted' },
      { key: 'host', value: 'hexlet.io', type: 'unchanged' },
      { key: 'proxy', value: '123.234.53.22', type: 'deleted' },
      { key: 'timeout', value1: 50, value2: 20, type: 'changed' },
      { key: 'verbose', value: true, type: 'added' }
    ] },
  { filename1: 'file2.json', filename2: 'file2.json', expected: [
      { key: 'host', value: 'hexlet.io', type: 'unchanged' },
      { key: 'timeout', value: 20, type: 'unchanged' },
      { key: 'verbose', value: true, type: 'unchanged' }
    ] },
  { filename1: 'file1.json', filename2: 'empty_json.json', expected: [
      { key: 'follow', value: false, type: 'deleted' },
      { key: 'host', value: 'hexlet.io', type: 'deleted' },
      { key: 'proxy', value: "123.234.53.22", type: 'deleted' },
      { key: 'timeout', value: 50, type: 'deleted'},
    ] },
  { filename1: 'file1.yaml', filename2: 'file2.yaml', expected: [
      { key: 'follow', value: false, type: 'deleted' },
      { key: 'host', value: 'hexlet.io', type: 'unchanged' },
      { key: 'proxy', value: '123.234.53.22', type: 'deleted' },
      { key: 'timeout', value1: 50, value2: 20, type: 'changed' },
      { key: 'verbose', value: true, type: 'added' }
    ] },
  { filename1: 'file2.yaml', filename2: 'file2.yaml', expected: [
      { key: 'host', value: 'hexlet.io', type: 'unchanged' },
      { key: 'timeout', value: 20, type: 'unchanged' },
      { key: 'verbose', value: true, type: 'unchanged' }
    ]} ,
]