#!/usr/bin/env node
const program = require('commander');
const pkg = require('../package.json');

program
    .version(pkg.version)
    .command('key','Manegae API key -- https://github.com/')
    .command('check','Check coin proce info')
    .parse(process.argv);


// console.log("Alen at coin.js");
// get argument from shell
// console.log(process.argv);