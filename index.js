const express = require('express');
const mustacheExpress = require('mustache-Express');
const data = require('./data');
const app = express()


app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')

app.use(express.static('public'))

app.get("/", function(req, res) {
  res.render('home', data)
})

// app.get("/:data", function(req, res) {
//   res.render('user', data)
// })


app.listen(3000, function() {
  console.log("listening on port 3000...")
})
