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
  bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(password, salt, async function(err, hash) {
      // Store hash in your password DB.
      var user = await User.create({
        email: body.email,
        password: hash,        
        role: body.role
      });
        console.log(body);
        console.log(user instanceof User);
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

//list all the TAs
router.get('/listTA', async (req, res) => {
  var users = await User.findAll({
    where: {
      role: "ta"
    }
  });
  res.json(users);
});

//create a TA
router.post('/createTA', async (req, res) => {
  //check user here whether the person is manager or not
  //assuming rught now that the person is a manager
  
  var body = req.body;
  var password = body.password;
  var email = body.email;
  var role = "ta";
  bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(password, salt, async function(err, hash) {
      // Store hash in your password DB.
      var user = await User.create({
        email: body.email,
        password: hash,        
        role: role
      });
        console.log(body);
        console.log(user instanceof User);
        res.send(user.toJSON());
    });
  });

});


router.post('/changepwd', async (req, res) => {

  //check user here whether the person is authorized to do the stuff
  //assuming rught now that the person is a manager
  
  //get the email from cookies through using the ID of the person
  var email = "trial@a.com";

  var oldPassword = req.body.oldPassword;
  var newPassword = req.body.newPassword;

  var users = await User.findAll({
    where: {
      email: email
    }
  });
  if(Object.keys(user).length == 0){
    console.log("System Error");
  }else if(Object.keys(user).length == 1){
    bcrypt.compare(oldPassword, user[0].password, function(err, result) {
      if(result){
        bcrypt.genSalt(saltRounds, function(err, salt) {
          bcrypt.hash(newPassword, salt, async function(err, hash) {
            // Store hash in your password DB.
            var user = await User.update({password: hash},{
              where: {
                email: email
              }
            });
          });
        });
        res.send("Password changed successful Login");
      }else{
        res.send("Wrong password");
      }
    });
  }
  res.json(users);
})

module.exports = router;
