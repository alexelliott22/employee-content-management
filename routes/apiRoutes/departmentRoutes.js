const express = require('express');
const router = express.Router();
const db = require('../../db/connection');
const inputCheck = require('../../utils/inputCheck');

//get all departments
router.get('/departments', (req, res) => {
    const sql = `SELECT * FROM departments`

    db.query(sql, (err, rows) => {
        if(err) {
            res.status(500).json({error: err.message})
            return;
        }

        res.json({
            message: 'Departments',
            data: rows
        });
    })
})

module.exports = router;