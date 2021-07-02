const mysql = require('mysql2');

//connect to the database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Xela3221',
        database: 'employees'
    }
);

module.exports = db;