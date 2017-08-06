const express = require('express');
const routes = express.Router();
const data = require('../models/user');

routes.get("/", function(req, res) {
  res.render('home', data)
})

module.exports = routes
