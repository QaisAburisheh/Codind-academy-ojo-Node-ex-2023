const querystring = require('querystring');

let urlQuery="name=value&key=value2";
let parsedObject=querystring.parse(urlQuery);
console.log("Parsed Query:", parsedObject)
