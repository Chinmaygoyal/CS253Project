var express = require('express');
var router = express.Router();
var connection = require('../database.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Yo' });
});

//route for login
router.post('/',function(req,res,next){
  var password = req.body.password;
  var email = req.body.email;
  connection.query("SELECT * FROM USERS where EMAIL=? AND PASSWORD=?",[email,password], function (err, result, fields) {
    if (err) throw err;
    if( result == '') console.log("Unauthorized access");
    else console.log("Success");
  });
  res.send("Yo");
});

module.exports = router;
