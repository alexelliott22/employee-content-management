const express = require('express');
const router = express.Router();
const db = require('../../db/connection');
const inputCheck = require('../../utils/inputCheck');

//get all roles
router.get('/roles', (req, res) => {
    const sql = `SELECT roles.id, roles.title, roles.salary, departments.name
                AS department
                FROM roles
                LEFT JOIN departments
                ON roles.department_id = departments.id`

    db.query(sql, (err, rows) => {
        if(err) {
            res.status(500).json({error: err.message})
            return;
        }

        res.json({
            message: 'Roles',
            data: rows
        });
    })
})

module.exports = router;