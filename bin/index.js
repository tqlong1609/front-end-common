#! /usr/bin/env node
// var fs = require('fs');
// const path = require('path');
// // const yargs = require('yargs');
// // console.log(yargs.argv.value);

const axios = require('axios');
const fs = require('fs');
const path = require('path');

// GitHub repository URL
// const repoUrl = 'https://github.com/tqlong1609/front-end-common/tree/master/src/redux';
const repoUrl = 'https://api.github.com/repos/tqlong1609/front-end-common/contents/src/redux';

// Local directory where you want to save the downloaded folder
const localDir = './redux';

// Function to download a file
const downloadFile = async (url, filePath) => {
  const response = await axios.get(url, { responseType: 'arraybuffer' });
  fs.writeFileSync(filePath, response.data);
};

// Function to download a folder
const downloadFolder = async (folderUrl, localFolderPath) => {
  const response = await axios.get(folderUrl);
  const files = response.data;

  if (!fs.existsSync(localFolderPath)) {
    fs.mkdirSync(localFolderPath);
  }

  for (const file of files) {
    const filePath = path.join(localFolderPath, file.name);

    if (file.type === 'dir') {
      await downloadFolder(file.url, filePath);
    } else {
      await downloadFile(file.download_url, filePath);
    }
  }
};

// Download the folder from the repository
downloadFolder(repoUrl, localDir)
  .then(() => {
    console.log('Folder downloaded successfully.');
  })
  .catch((error) => {
    console.error('An error occurred:', error);
  });
