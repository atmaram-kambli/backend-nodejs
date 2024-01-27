const express = require('express');
const app = express();
const port = 3000;

// This is the middleware function ()express.static()) for serving the static files in Express
app.use(express.static('public'))

// app.get or app.post or app.put or app.delete (path, handler_funtion);
app.get('/', (req, res) => {
  res.send("Hello World!!");
})
app.get('/blog', (req, res) => {
  res.send("This is the Blog page");
})
app.get('/about', (req, res) => {
  res.send("Hello there, I'm Atmaram Kambli.");
})
app.get('/contact', (req, res) => {
  res.send("Contact me at atmaram.work24@gmail.com");
})
app.get('/blog/javascript', (req, res) => {
  res.send("A Script of JavaScript");
})
app.get('/blog/python', (req, res) => {
  res.send("Be scared, it's Python from Programming");
})


// But but but, you need not to do this thing manually when express js is there
app.get('/blog/:slug', (req, res) => {
  // for url: http://localhost:3000/blog/hi?mode=dark&country=in
  // This will give 
  console.log(req.params);
  console.log(req.query);
  res.send(`<h1>The blog on ${req.params.slug}</h1>`)
})

app.get('/blog/:slug/:second', (req, res) => {
  res.send(`<h1>The blog on ${req.params.slug} ${req.params.second}</h1>`)
})


app.listen(port, () => {
  console.log(`Example app listening on the port ${port}`)
})