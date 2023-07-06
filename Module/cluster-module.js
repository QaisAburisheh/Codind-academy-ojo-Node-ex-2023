// const cluster =require('cluster');

// const http = require('http');
// // number of worker processes that will be created to handle incoming requests.
// const workers=6;

// if(cluster.isMaster){
//     for(let i=0; i < workers; i++){
//         cluster.fork()
//     } 
//     }else {
//         http.createServer(function(req, res){
//             res.writeHead(200);
//             res.end('process' + process.pid + 'say hello!')
//         }).listen(8000)
// }
// console.log(process.pid)

const cluster = require('cluster');
// If cluster.isWorker is true, it means the current process is a worker process
if (cluster.isWorker) {
  console.log('multiple processes running');
//   If cluster.isWorker is false, it means the current process is the master process.
} else {
  console.log('I am a master');
  cluster.fork();
  cluster.fork(); 
}