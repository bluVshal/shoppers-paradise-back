const mysql_connector = require('mysql');

const connection = mysql_connector.createConnection({
    host : 'localhost',
    user : 'root',
    password  :'jq88esfx',
    database : 'shoppersparadise'
  });

module.exports = connection;