#!/usr/bin/env node
import { Command } from 'commander';
const program = new Command();


program.option('-v, --version', 'output the version number')
  .argument('<filepath1>', 'path to first file')
  .argument('<filepath2>', 'path tp second file')
  .option('-f, --format', 'output format' )
  .description('Compares two configuration files and shows a difference.');

program.parse(process.argv);

