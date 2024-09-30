// Print Hello World
console.log("Hello World");

// Shows directory 
console.log(__dirname);

// Shows file name
console.log(__filename);

// outputs "Hello after 1 second" to the console
setTimeout(function () {
    console.log('Hello after 1 second');
  }, 1000);

// Allows to repeat something
let count = 1; // global counter
let maxCount = 1; // global maximum

let myCountInterval = setInterval(function () {
  console.log('Hello after ' + count++ + ' second(s)');
  checkMaximum();
}, 1000);

let checkMaximum = function () {
  if (count > maxCount) {
    clearInterval(myCountInterval);
  }
};

// Displays the contents of a URL
let myURL = new URL('https://myProductInventory.com/products?sort=asc&onSale=true');
console.log(myURL);

// Displaying key values
for (const [key, value] of myURL.searchParams) {
    console.log('key: ' + key + ' value: ' + value);
  }

// Event occurrence and error handling
const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('event', function () {
  console.log('an event occurred!');
});

myEmitter.emit('event');

// Read the contents of a csv. file
const fs = require('fs');

fs.readFile('names.csv', function (err, fileData) {
  if (err) console.log(err);
  else {
    namesArray = fileData.toString().split(',');
    console.log(namesArray);
  }
});

// List images
// const fs = require('fs');
fs.readdir('img', function (err, filesArray) {
  if (err) console.log(err);
  else {
    console.log(filesArray);
  }
});

// Adding paths to directory
const path = require('path');

console.log('Absolute path to about.html');

console.log(path.join(__dirname, '/about.html')); // with leading slash
console.log(path.join(__dirname, '//about.html')); // with multiple leading slashes
console.log(path.join(__dirname, 'about.html')); // without leading slash
console.log(path.join(__dirname, '\about.html')); // with incorrect leading slash

// Inputting data module
const readline = require('readline');

const rl = readline.createInterface(process.stdin, process.stdout);

rl.question('First Name: ', function (fName) {
  rl.question('Last Name: ', function (lName) {
    console.log('Hello: ' + fName + ' ' + lName);
    rl.close();
  });
});