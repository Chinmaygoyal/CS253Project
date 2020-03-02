var express = require('express');
var router = express.Router();
var sql = require('mysql');
var connection = require('../database');
var bodyParser = require('body-parser');
var uuid = require('uuid');

router.post('/', function(req, res){
    var ins = "INSERT INTO USERS (ID, NAME, EMAIL, PASSWORD, ROLE) VALUES ?"
    var params = [
        [uuid.v4(),req.body.name,req.body.email,req.body.password,req.body.role]
    ];
    console.log(params);
    connection.query(ins, [params], function(error, results, fields){
        if(error) throw error;
        res.end(JSON.stringify(results));
    });
});

module.exports = router;