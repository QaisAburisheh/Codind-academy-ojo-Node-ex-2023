const querystring = require('querystring');

const queryString = 'name=value&key=value2';
const parsedQuery = querystring.parse(queryString);

console.log(parsedQuery);
