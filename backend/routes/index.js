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
  console.log(body);
  var user = await User.create({
    email: body.email,
    password: body.password
  });
  console.log(user);
  console.log(user instanceof User);
  console.log("hello");
  res.send(user.toJSON());
})

//route for login
// router.post('/',async function(req,res,next){
//   var password = req.body.password;
//   var email = req.body.email;

//   var role;

//   connection.query("SELECT * FROM USERS where EMAIL=?", [email], function (err, result, fields) {
//     if (err)
//       throw err;
//     if (result.length == 0){
//       console.log(hash);
//       console.log("Unauthorized access");
//     }
//     else if (result.length == 1){
//       console.log(result);
//       if(bcrypt.compare(password, result[0].PASSWORD)){
//         console.log("Success");
//         role = result[0].ROLE;
//         res.send(role);
//       }else{
//         console.log("Wrong Password");
//       }
//     }
//     else
//       console.log("More than one entry on login, database error");
//   });
//   res.send("Yo");
// });

module.exports = router;
