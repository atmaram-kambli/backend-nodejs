# HTTP module

Node.js has a built-in module called HTTP, which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).

The HTTP module can create an HTTP server that listens to server ports and gives a response back to the client.

Use the createServer() method to create an HTTP server. It will take one handler function as argument which will execute when the client make request to the server. This function take two object (req, res) as arguments. 

req --> represents the request from the client, as an object
res --> represents the response the server sends to fulfil the client request.



### Add an HTTP Header
If the response from the HTTP server is supposed to be displayed as HTML, you should include an HTTP header with the correct content type:

Example
```
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello World!');
  res.end();
}).listen(8080);
```