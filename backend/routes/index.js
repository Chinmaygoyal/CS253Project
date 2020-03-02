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
router.post('/',async function(req,res,next){
  var password = req.body.password;
  var email = req.body.email;

  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(password, salt);
  var role;
    connection.query("SELECT * FROM USERS where EMAIL=? AND PASSWORD=?", [email, password], async function (err, result, fields) {
    if (err)
      throw err;
    if (result.length == 0){
      console.log("Unauthorized access");
    }
    else if (result.length == 1){
      console.log("Success");
      role = await result[0].ROLE;
      res.send(role);
    }
    else
      console.log("More than one entry on login, database error");
  });
  res.send("Yo");
});

module.exports = router;
