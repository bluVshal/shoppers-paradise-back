const express = require('express');
const app = express();
const connection = require('./sql/sql');
const router = require('./routes/routes');

connection.connect();

connection.query("select * from products", function(error, results){
    console.log("query response is ", results);
});
connection.end();

app.use('/', router);

app.listen(process.env.port || 65000);
console.log('app is listening to port', (process.env.port || 65000)); 