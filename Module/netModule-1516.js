
const net = require('net');

const server = net.createServer((socket) => {

  console.log('Client connected.');

  socket.on('data', (data) => {
    console.log(`Received data from client: ${data}`);

    socket.write('Server response: Data received.');
  });

  socket.on('end', () => {
    console.log('Client disconnected.');
  });
});

const port = 3000
server.listen(port, () => {
  console.log(`TCP server started on port ${port}`);
});
// if you open the browser and refresh the page it will print on terminal little bit client connected then show client disconnected


//num 16
 
const client = net.createConnection({ port: 3000 }, () => {
    console.log('Connected to TCP server.');

    // Send data to the server
    client.write('Hello, server!');
  });

  client.on('data', (data) => {
    console.log(`Received data from server: ${data}`);
  });

  client.on('end', () => {
    console.log('Disconnected from TCP server.');
  });

  client.on('error', (err) => {
    console.error(`Error with TCP client: ${err}`);
  });