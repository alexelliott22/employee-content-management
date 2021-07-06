const inquire = require('inquirer');
const Departments = require('./lib/Classes/Departments');
const Roles = require('./lib/Classes/Roles');
const Employees = require('./lib/Classes/Employees');
const {initialQuestions,
    addEmployeeQuestions,
    addDepartmentQuestions,
    addRoleQuestions,
    listofEmployees} = require('./lib/arrayQuestions');

const startApp = () => {
    inquire
    .prompt(initialQuestions)
    .then(data => showTables(data))
    .then(data => initAddQuestions(data))
    .then(data => updateEmployeeRole(data))
    .catch(error => console.log(error))
    
}

const showTables = async (data) => {
    try {
        if(await data.viewAddOrUpdate == 'view all departments') {
            let getDepartments = new Departments();
            await getDepartments.getAllDepartments();
            setTimeout(startApp, 1000)
    
        } else if(await data.viewAddOrUpdate == 'view all roles') {
            let viewAllRoles = new Roles();
            await viewAllRoles.getAllRoles();
            setTimeout(startApp, 1000)
    
        } else if(await data.viewAddOrUpdate == 'view all employees') {
            let viewEmployees = new Employees();
            await viewEmployees.getAllEmployees();
            setTimeout(startApp, 1000)
    
        } 
        return data;
        
    } catch (error) {
        console.log(error)
    }
}

const initAddQuestions = (data) => {

    if(data.viewAddOrUpdate == 'add a department') {
        return inquire
        .prompt(addDepartmentQuestions)
        .then(data => addNewDepartment(data))
        .catch(error => error)
    } else if(data.viewAddOrUpdate == 'add a role') {
        return inquire
        .prompt(addRoleQuestions)
        .then(data => addNewRole(data))
        .catch(error => error)
    } else if(data.viewAddOrUpdate == 'add an employee') {
        return inquire
        .prompt(addEmployeeQuestions)
        .then()
        .then(data => addNewEmployee(data))
        .catch(error => error)
    } 
    return data;
}

const addNewDepartment = async (data) => {
    try {
        let newDepartment = new Departments()

        await newDepartment.addDepartment(data)

        setTimeout(startApp, 1000)
       
   } catch (error) {
       console.log('Failed to add a new department:(')
    }
}

const addNewRole = async (data) => {
    try {
        let newRole = new Roles();
    
        await newRole.addRole(data);
    
        setTimeout(startApp, 1000)
        
    } catch (error) {
       console.log('Failed to add a new Role:(') 
    }
}

const addNewEmployee = async (data) => {
    let newEmployee = new Employees();
    
    await newEmployee.addEmployee(data)

    setTimeout(startApp, 1000)
}

const updateEmployeeRole = async (data) => {
    try {
        if(data.viewAddOrUpdate == 'update employee role') {
            const name = await inquire.prompt(listofEmployees)

            let splitName = name.employee.split(' ')
            
            let getRoles = new Roles();
            const rolesChoices = await getRoles.getRoleNames( name.department)
            
            const {role} = await inquire.prompt([
                {
                    type: 'list',
                    name: 'role',
                    message: "What is the employee's role at the company?",
                    choices: rolesChoices
                }
            ])
            
            let updateEmployee = new Employees();
            await updateEmployee.updateEmployeeRoleinDB(role, splitName, name.department)
            
            setTimeout(startApp, 1000);
        }
    } catch (error) {
        console.log('Was unable to update employee role:(')
    }
}

startApp();