const db = require('../db/connection.js');
const cTable = require('console.table');


class Employees {
    async getAllEmployees() {
        try {
            const sql = `SELECT employees.id, employees.first_name, employees.last_name, roles.title, roles.salary, departments.name
                    FROM employees
                    LEFT JOIN roles
                    ON employees.role_id = roles.id
                    LEFT JOIN departments
                    ON roles.department_id = departments.id`
    
            const [rows, fields] = await db.promise().query(sql)
            
            console.table(rows)
        } catch (error) {
            console.log('Failed to show all employees:(')
        }
    }

    async getDepartmentID(department) {
        const sql = `SELECT id FROM departments WHERE name = ?`
        
        const [rows, fields] = await db.promise().query(sql, [department])
                
        return rows[0].id;  
    }

    async getRoleID(role, department) {
            const sql = `SELECT id FROM roles WHERE title = ? AND department_id = ?`
            const params = [role, await this.getDepartmentID(department)]

            const [rows, fields] = await db.promise().query(sql, params)

            return rows[0].id;  
    }

    async getManagerID(first_name, last_name) {
        const sql = `SELECT id FROM employees WHERE first_name = ? AND last_name = ?`

        const [rows, fields] = await db.promise().query(sql, [first_name, last_name])

        return rows[0].id;
    }

    async addEmployee({first_name, last_name, role, department, manager_first_name, manager_last_name}) {
        try {
            const sql = `INSERT INTO employees(first_name, last_name, role_id, manager_id) VALUES(?,?,?,?)`
            const role_id = await this.getRoleID(role, department);
            const manager_id = await this.getManagerID(manager_first_name, manager_last_name);
            
            const params = [first_name, last_name, role_id, manager_id]
    
            await db.promise().query(sql, params)
    
            console.log('________Employee Added!_________')
            
        } catch (error) {
            console.log('Failed to add employee:(')
        }
    }

}

module.exports = Employees;