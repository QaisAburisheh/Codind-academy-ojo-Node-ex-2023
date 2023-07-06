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