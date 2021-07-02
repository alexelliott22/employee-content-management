const express = require('express');
const router = express.Router();
const db = require('../../db/connection');
const inputCheck = require('../../utils/inputCheck');

//get all employees
router.get('/employees', (req, res) => {
    const sql = `SELECT employees.id, employees.first_name, employees.last_name, roles.title, roles.salary, departments.name
                FROM employees
                LEFT JOIN roles
                ON employees.role_id = roles.id
                LEFT JOIN departments
                ON roles.department_id = departments.id`

    db.query(sql, (err, rows) => {
        if(err) {
            res.status(500).json({error: err.message})
            return;
        }

        res.json({
            message: 'Employees',
            data: rows
        });
    })
})

module.exports = router;