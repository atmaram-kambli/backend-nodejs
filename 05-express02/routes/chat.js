const express = require('express')
const router = express.Router()


// define the home page route
router.get('/', (req, res) => {
  res.send('Chat home page')
})
// define the about route
router.get('/how-to-use', (req, res) => {
  res.send('You can use me as you want')
})

module.exports = router