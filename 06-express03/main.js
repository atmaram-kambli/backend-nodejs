const express = require('express')
const birds = require('./routes/birds')
const fs = require('fs');
const app = express()
const port = 3000


// app.use(express.static("public"));
app.use('/birds', birds);


// Middleware 1
app.use((req, res, next) => {
    console.log("Middleware 1");
    next();
})

// Middleware 2
app.use((req, res, next) => {
    console.log("Middleware 2");
    next();
})

// Middleware 3
const m3 = function(req, res, next) {
    console.log("Middleware 3");
    next();
}
app.use(m3);

// Middleware 4 - it keep the info about log points
const requestTime = function (req, res, next) {
  fs.appendFileSync("log.txt", "Log at:"+`${new Date()} by ${req.method} request\n`);
  req.requestTime = Date.now()
  next()
}
app.use(requestTime);

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
  res.send('Hello about!')
})
app.get('/contact', (req, res) => {
  res.send('Hello contact!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})