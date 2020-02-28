var mysql = require('mysql');
var uuid = require('uuid');
var con = mysql.createConnection({
  host: 'localhost',
  user: 'newuser',
  password: 'password',
  database: 'first'
});

con.connect(function(err){
    if(err) throw err;
    console.log('Connected');
    var sql = "INSERT INTO USERS (ID, NAME, EMAIL, PASSWORD, ROLE) VALUES ?";
    var values = [
        [uuid.v4(),'Fullstack12','fullstack@aaryan.ssj5.in','chaapu','manager']
    ];
    con.query(sql,[values],function(err,result){
        if(err)throw err;
        console.log("Done");
    });
});
