var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;
const User = require('../models/user.js');
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

//route for creating and getting user
router.get('/api/users', async (req, res) => {
  var users = await User.findAll();
  res.json(users);
})

//only for development
router.post('/api/users', async (req, res) => {
  var body = req.body;
  var password = body.password;
  var user;
  bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(password, salt, async function(err, hash) {
        // Store hash in your password DB.
        user = await User.create({
          email: body.email,
          password: hash
        });
        console.log(body);
        console.log(user instanceof User);
        console.log("hello");
        res.send(user.toJSON());
    });
  });
})

//route for login
router.post('/',async function(req,res,next){
  var password = req.body.password;
  var email = req.body.email;
  var role;
  var user = await User.findAll({
    where: {
      email: email
    }
  });
  if(Object.keys(user).length == 0){
    res.send("Invalid access");
  }else if(Object.keys(user).length == 1){
    bcrypt.compare(password, user[0].password, function(err, result) {
      if(result){
          res.send("Successful Login");
        }else{
          res.send("Wrong credentials");
        }
    });
  }else{
    res.send("More than one entry on login, database error");
  }
});

module.exports = router;
