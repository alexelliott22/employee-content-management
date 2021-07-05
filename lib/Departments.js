const db = require('../db/connection.js');
const cTable = require('console.table');

class Departments {
    async getAllDepartments() {
        try {
            const sql = `SELECT * FROM departments`
    
            const [rows, fields] = await db.promise().query(sql)

            console.table(rows)
            
        } catch (error) {
            
        }
    }

    async addDepartment({name}) {
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