// 1 Use the fs module to read a file and print its contents to the console
const fs = require("fs");

function readData(err, data) {
	  console.log(data);
}

fs.readFile('example1.txt', 'utf8', readData);

// 2 Use the fs module to write a string to a file. 

const writeStream = fs.createWriteStream("example2.txt");
writeStream.write('Hello, World!')
writeStream.end

//  to read the data that you write
function readDataTwo(err, data) {
    console.log(data);
}

fs.readFile('example2.txt', 'utf8', readDataTwo);


