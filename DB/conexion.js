var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '100.26.132.98',
  user     : 'root',
  password : 'paloma24'
});

connection.connect();


connection.end();