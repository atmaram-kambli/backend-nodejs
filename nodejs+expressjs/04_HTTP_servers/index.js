const http = require("http");
const fs = require("fs")

const myServer = http.createServer((req, res) => {
    // console.log("New Request Received!!");
    const log = `${Date.now().toLocaleString()}: ${req.url} - New Request Received!!\n`
    fs.appendFile("./log.txt", log, (err) => {
        switch(req.url) {
            case '/':
                res.end("Welcome to HomePage")
                break;
            case '/about':
                res.end(`<h1>Hi, I'm Ak</h1>`)
                break;
            default:
                res.end("404 Page not Found")
                break;
        }
    })
    // res.end("The server started");
})


myServer.listen(8000, () => {
    console.log("A server is listening of port 8000")
})

