const inquire = require('inquirer');
const Departments = require('./lib/Departments');
const Roles = require('./lib/Roles');
const Employees = require('./lib/Employees');


const initialQuestions = [
    {
        type: 'list',
        name: 'viewOrAdd',
        message: 'Select one of the following options',
        choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee']
    }
]

const addEmployeeQuestions = [
    {
        type: 'input',
        name: 'first_name',
        message: "What is the emplyee's first name?",
        validate: name => {
            if(name) {
                return true;
            } else {
                console.log('Please enter a First Name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'last_name',
        message: "What is the emplyee's last name?",
        validate: name => {
            if(name) {
                return true;
            } else {
                console.log('Please enter a Last Name!');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'role',
        message: "What is the employee's role at the company?",
        choices: ['Manager', 'Senior', 'Staff']
    },
    {
        type: 'list',
        name: 'department',
        message: 'What department is your new employee in?',
        choices: ['Accounting', 'Sales', 'Finance', 'IT', 'Marketing']
    },
    {
        type: 'input',
        name: 'manager_first_name',
        message: "Who is the employee's manager(First Name)?"
    },
    {
        type: 'input',
        name: 'manager_last_name',
        message: "Who is the employee's manager(Last Name)?"
    }
]

const addDepartmentQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the new department?',
        validate: name => {
            if(name) {
                return true;
            } else {
                console.log('Please enter a Department Name!');
                return false;
            }
        }
    }
]

const addRoleQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the new role?',
        validate: name => {
            if(name) {
                return true;
            } else {
                console.log('Please enter a role name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'salary',
        message: 'What is the salary for this role?',
        validate: salary => {
            if(salary === parseInt(salary, 10)) {
                return true;
            } else {
                console.log('Please enter a salary and verify only numbers were used!');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'department',
        message: 'What department is your new role in?',
        choices: ['Accounting', 'Sales', 'Finance', 'IT', 'Marketing']
    }
]

const startApp = async function() {
    inquire
    .prompt(initialQuestions)
    .then(data => showTables(data))
    .then(data => initAddQuestions(data))
    
}

const addNewDepartment = (data) => {
    let newDepartment = new Departments()

    newDepartment.addDepartment(data)
}

const addNewRole = (data) => {
    let newRole = new Roles();

    newRole.addRole(data);
}

const addNewEmployee = (data) => {
    let newEmployee = new Employees();
    let departmentID = newEmployee.getDepartmentID('Accounting')
    console.log(departmentID);
//    newEmployee.getDepartmentID('Staff', departmentID)
}

const initAddQuestions = (data) => {
    if(data.viewOrAdd == 'add a department') {
        return inquire
        .prompt(addDepartmentQuestions)
        .then(data => addNewDepartment(data))
    } else if(data.viewOrAdd == 'add a role') {
        return inquire
        .prompt(addRoleQuestions)
        .then(data => addNewRole(data))
    } else if(data.viewOrAdd == 'add an employee') {
        return inquire
        .prompt(addEmployeeQuestions)
        .then(data => addNewEmployee(data))
    }
}

const showTables = (data) => {
    if(data.viewOrAdd == 'view all departments') {
        let getDepartments = new Departments();
        
        getDepartments.getAllDepartments();

    } else if(data.viewOrAdd == 'view all roles') {
        let viewAllRoles = new Roles();
        
        viewAllRoles.getAllRoles();
    } else if(data.viewOrAdd == 'view all employees') {
        let viewEmployees = new Employees();

        viewEmployees.getAllEmployees();
    }
    
    return data;
}

startApp();