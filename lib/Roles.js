const db = require('../db/connection');
const cTable = require('console.table');

class Roles {
    getAllRoles() {
        const sql = `SELECT roles.id, roles.title, roles.salary, departments.name
                AS department
                FROM roles
                LEFT JOIN departments
                ON roles.department_id = departments.id`

        db.query(sql, (err, rows) => {
            if(err) {
                console.log(err.message);
                return;
            }

            console.table(rows);
        })
    }

    addRole({name, salary, department}) {
        const sql = `INSERT INTO roles(title, salary, department_id) VALUES(?,?,?)`
        const params = [name, salary, this.getDepartmentID(department)]

        db.query(sql, params, (err, result) => {
            if(err) {
                console.log(err.message);
                return;
            }
            console.log('________Department Added!________')
        })
    }

    getDepartmentID(department) {
        const sql = `SELECT id FROM departments WHERE name = ?`
        
        db.query(sql, department, (err, result) => {
            if(err) {
                console.log(err.message);
                return;
            }
            console.log('________Department Added!________')
        })
    }
}

module.exports = Roles;