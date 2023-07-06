// Use the http module to create a simple server that returns "Hello, World!" for the root route.
const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Hello world");
  res.end();
});

server.listen(5000);
