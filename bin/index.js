#! /usr/bin/env node
const yargs = require('yargs');
const { GITHUB_REPO_URL } = require('../lib/constants');
const { downloadFolder } = require('../lib/utils');
const { configs } = require('../lib/config');
const { generate } = yargs.argv;

if (generate && configs[generate]) {
  const { repoUrl, localDir } = configs[generate];
  if (repoUrl && localDir) {
    // // Download the folder from the repository
    downloadFolder(GITHUB_REPO_URL + repoUrl, localDir)
      .then(() => {
        console.log('Folder downloaded successfully.');
      })
      .catch((error) => {
        console.error('Folder download fail: ', error);
      });
  }
} else {
  console.log('Command not found!');
  process.exit(0);
}
