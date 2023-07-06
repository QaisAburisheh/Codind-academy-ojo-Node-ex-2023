// Use the path module to join two file paths.

const path = require('path')

const filePathOne=path.join('/path','to', 'file1')
const filePathTwo=path.join('/path','to', 'file2')
console.log(filePathOne)
console.log(filePathTwo)

console.log(filePathOne + filePathTwo)

/*
const path = require('path');

const filePathOne = '/path/to/file1';
const filePathTwo = '/path/to/file2';

const joinedPath = path.join(filePathOne, filePathTwo);
console.log(joinedPath);

*/