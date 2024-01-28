const express = require('express')
const blog = require('./routes/blog')
const chat = require('./routes/chat')

const app = express()
const port = 3000

app.use(express.static("public"));
app.use('/blog', blog);
app.use('/chat', chat);

// app.get('/', (req, res) => {
//   console.log("get request");
//   res.send('Hello World!')
// })

// // We can use html file to test the post request
// app.post('/', (req, res) => {
//   console.log("post request");
//   res.send('Hello post World!')
// })
// app.put('/', (req, res) => {
//   console.log("put request");
//   res.send('Hello put world!')
// })



// We can also write above by chaining the request method of the same app
app.get('/', (req, res) => {
  console.log("get request");
  res.send('Hello World!')
}).post('/', (req, res) => {
  console.log("post request");
  res.send('Hello post World!')
}).put('/', (req, res) => {
  console.log("put request");
  res.send('Hello put world!')
}).delete((res, req) => {
  res.send("Hello delete world");
})

app.get('/about',(req, res) => {
  // res.send("about us");
  // When want to render proper html file
  res.sendFile('templates/about.html', {root: __dirname});
})


app.get('/api',(req, res) => {
  res.json({a:12, b:23, name:"Harry", objArr:[12, 23, "ram", "kite"]});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})