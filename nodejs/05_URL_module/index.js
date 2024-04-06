const http = require("http")
const { type } = require("os")
const url = require("url")


// http://localhost:8000/search?search=nodejs&source=w3schools

const server = http.createServer((req, res) => {
    res.writeHead(200, {"content-type": "text/html"});

    // const myUrl = req.url;
    // console.log(myUrl)
    if(req.url === "/favicon.ico") {
        return res.end()
    }
    // const url1 = url.parse(req.url)
    const url1 = url.parse(req.url, true)
    console.log(url1)
    console.log(url1.pathname)
    console.log(url1.host)
    console.log(url1.search)
    
    console.log(url1.query)
    console.log(url1.query.source)

    res.write(`<h1>Hello world</h1>`)
    res.end();
})

server.listen(8000, () => {
    console.log("App is listening on port 8000")
})