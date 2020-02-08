var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'newuser',
  password: 'password',
  database: 'first'
});

connection.connect(function(err) {
    if(err) console.log("Database connection failed, the error is : " + err);
    else console.log("MySQL is running. ")
});

module.exports = connection;