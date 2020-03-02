var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = require('../database');
var bodyParser = require('body-parser');

router.get('/', function (req, res) {
  connection.query('select NAME from USERS where EMAIL=? AND PASSWORD=?', [req.body.email,req.body.password], function (error, results, fields) {
   if (error) throw error;
   res.end(JSON.stringify(results));
 });
});

module.exports = router;
