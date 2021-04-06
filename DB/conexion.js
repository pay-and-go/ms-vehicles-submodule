var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'mmolinaf',
  password : 'Molina1026'
});

connection.connect();


connection.end();