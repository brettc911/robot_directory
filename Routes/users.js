const express = require('express');
const db = require('../db');
const routes = express.Router();

routes.get("/:user", function(req, res) {
  var robotName = req.params.user
  var coll = db.get().collection('userData')
  coll.find({username: robotName}).toArray((err, result) => {
    res.render('user', {user: result})
  });
})





  // for (var i = 0; i < data.users.length; i++) {
  //   if (data.users[i].job === null) {
  //     data.users[i].job = "looking for work"
  //   }
  //   if ( data.users[i].name === robotName) {
  //     res.render('user', data.users[i])
  //   }
  // }

module.exports = routes
