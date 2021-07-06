const db = require('../../db/connection.js');
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

        await db.promise().query(sql, name)
        
        console.log('________Department Added!________')
    }

    async getDepartmentNames() {
        const sql = `SELECT departments.name FROM departments`

        const [rows, fields] = await db.promise().query(sql)
        
        return rows.map(department => department.name);
    }
}

module.exports = Departments;