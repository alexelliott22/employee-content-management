
const mysql = require('mysql2');
const bluebird = require('bluebird');

//connect to the database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'blue-lagoon',
        database: 'employees_db'
    }
);

module.exports = db;