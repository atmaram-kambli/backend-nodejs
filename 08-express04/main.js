const express = require('express')
const app = express()
const port = 3000

// ejs is view engine, some other view engines are pug, template engine handle bar
app.set('view engine', 'ejs');  

app.get('/', (req, res) => {
//   res.send('Hello World!')
let siteName = "Adidas";
let search = "Search Now";
let dropDown = ["About", "Contact", "Apply"]
    res.render('index', {siteName: siteName, search: search, dropDown: dropDown, con:"HEy, ConTact uS"});
    // res.render('./views/index.html', {root: __dirname});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})