const inquire = require('inquirer');



const initialQuestions = [
    {
        type: 'list',
        name: 'viewOrAdd',
        message: 'Select one of the following options',
        choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee']
    }
]

const startApp = function() {

    inquire
    .prompt(initialQuestions)
    .then(data => {
        
        //write a function to show them the database table they select
        showTables(data)
        //write a function to handle the adding 
    })
}

const showTables = (data) => {
    if(data.viewOrAdd == 'view all departments') {
        fetch('/api/departments', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then(data => console.table(data))
        

    } else if(data.viewOrAdd == 'view all roles') {
        fetch('/api/roles', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then(data => console.table(data))

    } else if(data.viewOrAdd == 'view all employees') {
        fetch('/api/employees', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then(data => console.table(data))
    }
    return;
}

startApp();