const mysql = require('mysql');

const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"6399",
    database:"RecordData"
});

con.connect(function(err){
    if(err) throw console.error("Error in Database");
   console.log("Database Connected"); 
});

module.exports = con;