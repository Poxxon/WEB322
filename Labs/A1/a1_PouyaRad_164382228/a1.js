/*********************************************************************************
*  WEB322 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites, GPT) or distributed to other students.
* 
* Name: Pouya Rad
* Student ID: 164382228
* Date: 04/09/24
*
********************************************************************************/ 

// Inputting data module
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

// The fs module to read directories and files
const fs = require('fs');

// Module for providing the path
const path = require('path');

// Function to display number of lines, words, chars, and frequency of each letter (case-sensitive)
// Will be used for step 3 and 4
function getData(data) {
  const lines  = data.split('\n').length;
  const words = data.split(/\s+/).filter(Boolean).length;
  const chars = data.replace(/\s+/g, '').length;

  const frequency = {};
  data.toLowerCase().replace(/[^a-z]/g, '').split('').forEach(char => {
    frequency[char] = (frequency[char] || 0) + 1;
  });

  console.log(`Number of line: ${lines}`);
  console.log(`Number of words: ${words}`);
  console.log(`Number of Characters: ${chars}`);
  console.log('Number of letter frequency: ', frequency);
}

// Menu module
rl.question('Do you wish to process a File (f) or directory (d): ', function (response) {
    if (response === 'f') {
        rl.question('File: ', function (file) {
            //Step 3
            fs.readFile(file, 'utf8',function (err, data) {
                if (err) console.log(err.message);
                else {
                  //Logic here
                  console.log(`Processing file: ${file}`);
                  getData(data);
                }
              });
            rl.close();
        });
    } else if (response === 'd') {
        rl.question('Directory: ', function (directory) {
            //Step 4
            fs.readdir(directory, function (err, files) {
                if (err) console.log(err.message);
                else {
                  //Logic here 
                  const txtFiles = files.filter(file => file.endsWith('.txt'));
                  console.log(`Number of .txt files within the directory: ${txtFiles.length}`);

                  let totalSize = 0;
                  txtFiles.forEach(file => {
                    const filePath = path.join(directory, file);
                    const stats = fs.statSync(filePath);
                    totalSize += stats.size;
                    
                    fs.readFile(filePath, 'utf8', (err, data) => {
                      if (err) console.log(err.message);
                      else {
                        console.log(`\nProcessing directory: ${filePath}`);
                        getData(data);
                      }
                    });
                  });
                  console.log(`The cumulative size of all files are: ${totalSize} bytes`)
                }
                rl.close();
              });
        });
    } else {
        console.log('Invalid input! Please enter (f) for file and (d) for directory.');
        rl.close();
    }
});
