const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
    // res.writeHead(200, {"content-type":"text/html"});
    // res.end(`<h1>Hello world!</h1>`);
    // console.log(req.url);
    const myUrl = url.parse(req.url, true);
    // console.log(myUrl)
    const fileName = "."+ myUrl.pathname;
    console.log(fileName)
    
    fs.readFile(fileName, (err, data) => {
        if(err) {
            res.writeHead(404, {"content-type":"text/html"});
            return res.end(`<h1>404 Page Not Found</h1>`);
        }
        res.writeHead(200, {"content-type":"text/html"});
        res.write(data);
        return res.end()
    })

    // res.end(`<h1>Hello world!</h1>`);

})

myServer.listen(3000, () => {
    console.log("App is listening on port 3000");
})
