const inquire = require('inquirer');



const questions = [
    {
        type: 'list',
        name: 'viewOrAdd',
        message: 'Select one of the following options',
        choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee']
    }
]

const startApp = function() {

    inquire
    .prompt(questions)
    .then(data => {
        console.log(data);
        //write a function to show them the database table they select
        // showTables(data)
        //write a function to handle the adding 
    })
}

const showTables = (data) => {
    if(data.viewOrAdd == 'view all departments') {
        
        startApp();
    } else if(data.viewOrAdd == 'view all roles') {
        
        startApp();
    } else if(data.viewOrAdd == 'view all employees') {

        startApp();
    }
    return;
}

startApp();