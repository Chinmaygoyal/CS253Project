var express = require('express');
var router = express.Router();
var connection = require('../database.js');
const bcrypt = require('bcrypt');
const saltRounds = 10;

// var session = require('express-session');
var cookieParser = require('cookie-parser');
let user = {
  id : "101010",
  role : "manager"
}
var cookieValue = JSON.stringify(user);
/* GET home page. */
router.get('/', function(req, res, next) {
  res.cookie('cookietemp',user,{maxAge : 900000});
  res.end('YOYOYO');
  res.render('index', { title: 'Yo' });
});
// router.get('/removeCookie',function(req,res,next){
//   res.clearCookie('myFirstCookie');
//   res.end('WOW');
// });

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
