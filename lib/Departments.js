const db = require('../db/connection');
const cTable = require('console.table');

class Departments {
    getAllDepartments() {
        const sql = `SELECT * FROM departments`

        db.query(sql, (err, rows) => {
            if(err) {
                console.log(err.message);
                return;
            }

            console.table(rows);
        })
    }

    addDepartment({name}) {
        const sql = `INSERT INTO departments(name) VALUES(?)`

        db.query(sql, name, (err, result) => {
            if(err) {
                console.log(err.message);
                return;
            }
            console.log('________Department Added!________')
        })
    }
}

module.exports = Departments;