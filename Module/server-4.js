const http =require("http");
const server = http.createServer((req, res)=>{
    if(req.url==='/'){
        res.end('welcome to our home page')
    } else if(req.url==='/about'){
        res.end('here is about page')
    } else{
        res.end(`
        <h1>Oops!</h1>
        <p>404 error page not found</p>
        <a href="/">back home</a>
        `)
    }
})

server.listen(5001)