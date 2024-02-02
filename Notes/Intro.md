# Introduction to Node.js

##### Source: https://nodejs.org/en/learn/getting-started/introduction-to-nodejs

## Features
- Open source
- Cross platform
- Single threded
- runs V8 JS Engine
- Asynchronous programming
- JS runtime environment: used for runnting JS on server side


When Node.js performs an I/O operation, like reading from the network, accessing a database or the filesystem, instead of blocking the thread and wasting CPU cycles waiting, Node.js will resume the operations when the response comes back.


### Example Node.js Application

```
const http = require('node:http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```


### How to install Node.js
Official Website: https://nodejs.org/download/

- nvm is a popular way to run Node.js. It allows you to easily switch the Node.js version, and install new versions to try and easily rollback if something breaks. 
- In any case, when Node.js is installed you'll have access to the node executable program in the command line.