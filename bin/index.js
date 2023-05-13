#! /usr/bin/env node
var fs = require('fs');
const path = require('path');
// const yargs = require('yargs');
// console.log(yargs.argv.value);

fs.cp(path.resolve('./') + '/src/redux', './redux', { recursive: true }, (err) => {
  if (err) {
    console.error(err);
  }
});
