#!/usr/bin/env node
import { Command } from 'commander';
import { createView, genDiff } from "../src/helpers/compareObjects.js";
const program = new Command();


program.option('-v, --version', 'output the version number')
  .argument('<filepath1>', 'path to first file')
  .argument('<filepath2>', 'path tp second file')
  .option('-f, --format [type]', 'output format' )
  .description('Compares two configuration files and shows a difference.')
  .action((filepath1, filepath2, options,) => {
   // const filePath = 'src/data/file1.json'
    console.log(genDiff(filepath1, filepath2));
});

program.parse(process.argv);

