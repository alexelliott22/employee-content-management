const Departments = require('./Classes/Departments');
const Roles = require('./Classes/Roles');
const Employees = require('./Classes/Employees');

const initialQuestions = [
    {
        type: 'list',
        name: 'viewAddOrUpdate',
        message: 'Select one of the following options',
        choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update employee role']
    }
]

const addEmployeeQuestions = [
    {
        type: 'input',
        name: 'first_name',
        message: "What is the employee's first name?",
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
        message: "What is the employee's last name?",
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
        name: 'department',
        message: 'What department is your new employee in?',
        choices: async () => {
            let newDepartment = new Departments();
            return await newDepartment.getDepartmentNames();
        }
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
        message: 'What is the salary for this role?'
    },
    {
        type: 'list',
        name: 'department',
        message: 'What department is your new role in?',
        choices: async () => {
            let getDepartments = new Departments();
            return await getDepartments.getDepartmentNames();
        }
    }
]

const listofEmployees = [
    {
        type: 'list',
        name: 'employee',
        message: 'Which employee would you like to edit?',
        choices: async () => {
            let getEmployees = new Employees();
            const employeeList = await getEmployees.getEmployeesNames();
            return employeeList
        }
    },
    {
        type: 'list',
        name: 'department',
        message: 'What department is your new role in?',
        choices: async () => {
            let getDepartments = new Departments();
            return await getDepartments.getDepartmentNames();
        }
    }
]

module.exports = {
    initialQuestions,
    addEmployeeQuestions,
    addDepartmentQuestions,
    addRoleQuestions,
    listofEmployees
}

