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

//add an employee
router.post('/employees', ({body}, res) => {
    const errors = inputCheck(body, 'first_name', 'last_name', 'role_id');
    if(errors) {
        res.status(400).json({error: errors});
        return;
    }

    const sql = `INSERT INTO employees(first_name, last_name, role_id, manager_id) VALUES(?,?,?,?)`
    const params = [body.first_name, body.last_name, body.role_id, body.manager_id]

    db.query(sql, params, (err, result) => {
        if(err) {
            res.status(400).json({error: err.message});
            return;
        }
        res.json({
            message: 'sucess',
            data: body,
            changes: result.affectedRows
        })
    })
})

module.exports = router;