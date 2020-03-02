var mysql = require('mysql');
var uuid = require('uuid');
var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;
// var http = require('http');
var app = express();
// var bodyParser = require('body-parser');
var con = mysql.createConnection({
  host: 'localhost',
  user: 'newuser',
  password: 'password',
  database: 'first'
});

con.connect(function(err){
    if(err) throw err;
    console.log('Connected');
});


router.get('/',function(req,res,next){
    con.query('SELECT * FROM USERS',function(err,results){
        if(err)throw err;
        console.log(results);
        res.end(JSON.stringify(results));
    });
});
router.get('/:id',function(req,res){
    var id = req.params.id;
    var sql = "SELECT * FROM USERS WHERE ID = ?";
    con.query(sql,[id],function(err,result){
        if(err)throw err;
        res.end(JSON.stringify(result));
    });
});
router.post('/insert',function(req,res){
    var sql = "INSERT INTO USERS (ID, NAME, EMAIL, PASSWORD, ROLE) VALUES ?";
    var password = req.body.password;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password,salt);
    var values = [
        [uuid.v4(),req.body.name,req.body.email,hash,req.body.role]
    ];
    con.query(sql,[values],function(err,result, fields){
        if(err)throw err;
        console.log("Done");
        res.end(JSON.stringify(result));
    });
});
module.exports = router;
