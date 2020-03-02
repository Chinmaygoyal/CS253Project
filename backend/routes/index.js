var express = require('express');
var router = express.Router();
var connection = require('../database.js');
const bcrypt = require('bcrypt');
const saltRounds = 10;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Yo' });
});

//route for login
router.post('/',function(req,res,next){
  var password = req.body.password;
  var email = req.body.email;

  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(password, salt);

  connection.query("SELECT * FROM USERS where EMAIL=? AND PASSWORD=?",[email,hash], async function (err, result, fields) {
    if (err) throw err;
    if( result == '') console.log("Unauthorized access");
    else console.log("Success");
  });
  res.send("Yo");
});

module.exports = router;
