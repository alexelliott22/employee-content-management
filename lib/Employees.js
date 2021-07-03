const db = require('../db/connection');
const cTable = require('console.table');

class Employees {
    getAllEmployees() {
        const sql = `SELECT employees.id, employees.first_name, employees.last_name, roles.title, roles.salary, departments.name
                FROM employees
                LEFT JOIN roles
                ON employees.role_id = roles.id
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

    async getDepartmentID(department) {
        const sql = `SELECT id FROM departments WHERE name = ?`
        
        const [rows, fields] = await db.execute(sql, [department]);

        console.log([rows, fields])
    }

    async getRoleID(role, departmentID) {
        const sql = `SELECT id FROM roles WHERE title = ? AND department_id = ?`
        const params = [role, departmentID]
        console.log(params);
        
        db.query(sql, params, (err, rows) => {
            if(err) {
                console.log(err.message);
                return;
            }
            
           console.log(rows[0])
        })
    }

    getManagerID(first_name, last_name) {
        const sql = `SELECT id FROM employees WHERE first_name = ? AND last_name = ?`

        db.query(sql, [first_name, last_name], (err, rows) => {
            if(err) {
                console.log(err.message);
                return;
            }
            return rows[0].id;
        })
    }

    addEmployee({first_name, last_name, role, manager_first_name, manager_last_name}) {
        const sql = `INSERT INTO employees(first_name, last_name, role_id, manager_id) VALUES(?,?,?,?)`
        const role_id = this.getRoleID(role);
        const manager_id = this.getManagerID(manager_first_name, manager_last_name);
        
        const params = [first_name, last_name, role_id, manager_id]

        db.query(sql, params, (err, result) => {
            if(err) {
                console.log(err.message);
                return;
            }
            console.log('________Employee Added!________')
        })
    }

}

module.exports = Employees;