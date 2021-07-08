const db = require('../../db/connection');
const cTable = require('console.table');

class Roles {
    async getAllRoles() {
        try {
            const sql = `SELECT roles.id, roles.title, roles.salary, departments.name
                    AS department
                    FROM roles
                    LEFT JOIN departments
                    ON roles.department_id = departments.id`
    
            const [rows, fields] = await db.promise().query(sql)

            console.table(rows);
            
        } catch (error) {
            console.log('Failed to get all roles:(')
        }
    }

    async getDepartmentID(department) {
        const sql = `SELECT id FROM departments WHERE name = ?`
        
        const [rows, fields] = await db.promise().query(sql, department)

        return rows[0].id;
    }

    async addRole({name, salary, department}) {

            const sql = `INSERT INTO roles(title, salary, department_id) VALUES(?,?,?)`
            const params = [name, salary, await this.getDepartmentID(department)]
    
            await db.promise().query(sql, params)
    
            console.log('________Role Added!________')
    }

    async getRoleNames(department) {
        const sql = `SELECT roles.title FROM roles
                    WHERE department_id = ?`
        const params = [await this.getDepartmentID(department)]

        const [rows, fields] = await db.promise().query(sql, params)
        
        return rows.map(role => role.title);
    }

    async getAllRoleNames() {
        const sql = `SELECT roles.title FROM roles`

        const [rows, fields] = await db.promise().query(sql, params)
        
        return rows.map(role => role.title);
    }
}

module.exports = Roles;