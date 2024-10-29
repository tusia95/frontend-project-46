#!/usr/bin/env node
import { Command } from 'commander';
const program = new Command();

program.description('Compares two configuration files and shows a difference.');

program.option('-v, --version', 'output the version number');
program.parse(process.argv);

