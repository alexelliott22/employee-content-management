const inquire = require('inquirer');
const Departments = require('./lib/Classes/Departments');
const Roles = require('./lib/Classes/Roles');
const Employees = require('./lib/Classes/Employees');
const {initialQuestions,
    addEmployeeQuestions,
    addDepartmentQuestions,
    addRoleQuestions,
    listofEmployees} = require('./lib/arrayQuestions');

let newEmployee = new Employees();
let newRole = new Roles();
let newDepartment = new Departments()


const startApp = async () => {
    inquire
    .prompt(initialQuestions)
    .then(data => initialQuestionHandler(data))
    .catch(error => console.log(error))
    
}

const initialQuestionHandler = async (answer) => {
    switch(answer.viewAddOrUpdate) {
        case 'view all departments':
            await showDepartmentsTbl();
            break;
        case 'view all roles':
            await showRolesTbl();
            break;
        case 'view all employees':
            await showEmployeesTbl();
            break;
        case 'add a department':
            return inquire
            .prompt(addDepartmentQuestions)
            .then(data => addNewDepartment(data))
            .catch(error => error);
            break;
        case 'add a role':
            return inquire
            .prompt(addRoleQuestions)
            .then(data => addNewRole(data))
            .catch(error => error);
            break;
        case 'add an employee':
            return inquire
            .prompt(addEmployeeQuestions)
            .then(data => addNewEmployee(data))
            .catch(error => error)
            break;
        case 'update employee role':
            await updateEmployeeRole();
    }
}

const showDepartmentsTbl = async () => {
    try {
        await newDepartment.getAllDepartments();
        setTimeout(startApp, 1000)
    } catch (error) {
        console.log(error)
    }
}

const showRolesTbl = async () => {
    try {
        await newRole.getAllRoles();
        setTimeout(startApp, 1000)
    } catch (error) {
        console.log(error)
    }
}

const showEmployeesTbl = async () => {
    try {
        await newEmployee.getAllEmployees();
        setTimeout(startApp, 1000);
        
    } catch (error) {
        console.log(error)
    }
}

const addNewDepartment = async (data) => {
    try {
        await newDepartment.addDepartment(data)

        setTimeout(startApp, 1000)
       
   } catch (error) {
       console.log('Failed to add a new department:(')
    }
}

const addNewRole = async (data) => {
    try {  
        await newRole.addRole(data);
    
        setTimeout(startApp, 1000)
        
    } catch (error) {
       console.log('Failed to add a new Role:(') 
    }
}

const addNewEmployee = async (data) => {
    try {
        await newEmployee.addEmployee(data);
        setTimeout(startApp, 1000)
    } catch (error) {
        console.log('Failed to add a new employee:(')
    }
}

const updateEmployeeRole = async () => {
    try {
        const name = await inquire.prompt(listofEmployees)

        let splitName = name.employee.split(' ')
        
        
        const rolesChoices = await newRole.getRoleNames(name.department)
        
        const {role} = await inquire.prompt([
            {
                type: 'list',
                name: 'role',
                message: "What is the employee's role at the company?",
                choices: rolesChoices
            }
        ])

        
        await newEmployee.updateEmployeeRoleinDB(role, splitName, name.department)
        
        setTimeout(startApp, 1000);
    } catch (error) {
        console.log('Was unable to update employee role:(')
    }
}

startApp();