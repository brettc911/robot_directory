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

app.get("/:user", function(req, res) {

  var robotName = req.params.user

  for (var i = 0; i < data.users.length; i++) {

    if (data.users[i].job === null) {
      data.users[i].job = "looking for work"
    }

    if (data.users[i].name === robotName) {
      res.render('user', data.users[i])
    }
  }
})


app.listen(3000, function() {
  console.log("listening on port 3000...")
})
