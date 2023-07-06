// Use the url module to parse a URL and access its components. 

const url = require('url')
 const adress = 'http://www.example.com:8080/path?query=value#fragment.'

const usingAdress=url.parse(adress, true)
console.log(`protocol: ${usingAdress.protocol}`)
console.log(`host: ${usingAdress.host}`)
console.log(`pathname: ${usingAdress.pathname}`)
console.log(`search: ${usingAdress.search}`)
console.log(`hash: ${usingAdress.hash}`)



or
/*
const url = require('url');

const urlString = 'http://www.example.com:8080/path?query=value#fragment';
const parsedUrl = new URL(urlString);

const components = {
  protocol: parsedUrl.protocol,
  host: parsedUrl.host,
  pathname: parsedUrl.pathname,
  search: parsedUrl.search,
  hash: parsedUrl.hash
};

console.log(components);
*/
