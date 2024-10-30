#!/usr/bin/env node
import { Command } from 'commander';
import { getAbsoluteFilePath, getFileExtension, readFile } from "../src/helpers/files.js";
const program = new Command();


program.option('-v, --version', 'output the version number')
  .argument('<filepath1>', 'path to first file')
  .argument('<filepath2>', 'path tp second file')
  .option('-f, --format [type]', 'output format' )
  .description('Compares two configuration files and shows a difference.')
  .action((filepath1, filepath2, options,) => {
   // const filePath = 'src/data/file1.json'
    const absolutePath1 = getAbsoluteFilePath(filepath1);
    console.log(JSON.parse(readFile(absolutePath1)));

    const absolutePath2 = getAbsoluteFilePath(filepath2);
      console.log(JSON.parse(readFile(absolutePath2)));
});

program.parse(process.argv);

