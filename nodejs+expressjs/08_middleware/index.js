const express = require('express');

const app = express();
const PORT = 8000;



// The middleware m1 and m2 will execute for every request the app received 
const m1 = function(req, res, next) {
    const timeNow = Date.now();
    req.myName = "Ak";
    console.log("Middleware 1: ",timeNow)
    next();
} 
const m2 = function(req, res, next) {
    const timeNow = Date.now();
    console.log("Middleware 2: ",timeNow)
    next();
} 

app.use(m1);
app.use(m2);

app.get('/', (req, res) => {
    console.log("get request to ", req.myName)
    res.send("Hello world")
})


app.get('/user', (req, res) => {
    return res.send("Hello user!!");
})


// these middleware will executed for any type of HTTP request onthe '/user/:name' path
app.use('/user/:name', (req, res, next) => {
    console.log("Request Type: ", req.method);
    next();
})



app.get('/user/:name', (req, res) => {
    return res.send("Hello "+ req.params.name)
})



app.listen(PORT, () => {
    console.log("App is listening on port", PORT);
})