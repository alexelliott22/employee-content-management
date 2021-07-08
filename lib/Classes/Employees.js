const db = require('../../db/connection');
const cTable = require('console.table');


class Employees {
    async getAllEmployees() {
        try {
            const sql = `SELECT e.id, e.first_name AS FirstName, e.last_name AS LastName, r.title AS Title, r.salary AS Salary, d.name AS Department, m.first_name AS Manager_First_Name , m.last_name AS Manager_Last_Name
                    FROM employees AS e
                    LEFT JOIN roles AS r
                    ON e.role_id = r.id
                    LEFT JOIN departments AS d
                    ON r.department_id = d.id
                    LEFT JOIN employees AS m
                    ON e.manager_id = m.id`
    
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

    async addEmployee({first_name, last_name, department, manager_first_name, manager_last_name}, role) {
        const sql = `INSERT INTO employees(first_name, last_name, role_id, manager_id) VALUES(?,?,?,?)`
        const role_id = await this.getRoleID(role, department);
        const manager_id = await this.getManagerID(manager_first_name, manager_last_name);
        
        const params = [first_name, last_name, role_id, manager_id]

        await db.promise().query(sql, params)

        console.log('________Employee Added!_________')
    }

    async updateEmployeeRoleinDB(role, name, department) {
        const sql = `UPDATE employees SET role_id = ?
                    WHERE first_name = ? and last_name = ?`
        const params = [await this.getRoleID(role, department), name[0], name[1]]

        await db.promise().query(sql, params);

        console.log('______Employee Updated!_______');       
    }
    
    async getEmployeesNames() {
        const sql = `SELECT first_name, last_name
                    FROM employees`
        
        const [rows, fields] = await db.promise().query(sql);
        
        const employeeList = rows.map(employee => employee.first_name + ' ' + employee.last_name)
        
        return employeeList;
    }


}

module.exports = Employees;