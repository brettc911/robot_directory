const express = require('express');
const mustacheExpress = require('mustache-Express');
const data = require('./models/user');
const db = require('./db');
const app = express()
// Routes
const userRoutes = require('./Routes/users');
const homeRoute = require('./Routes/home');



app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')


app.use(express.static('public'))

let url = 'mongodb://localhost:27017/newdb'

// users route
app.use('/', userRoutes);
// home route
app.use('/', homeRoute)

db.connect(url, (err, connection) => {
  if (!err) console.log('connected to mongo');

  app.listen(3000, () => console.log('listening on 3000...'));
});
