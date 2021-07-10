const inquirer = require('inquirer');
const cTable = require('console.table');
const mysql = require('mysql2');

const firstQuestion = [
{
    name: 'firstQ',
    type: 'list',
    message: 'What would you like to do?',
    choices: [
    'View all departments',
    'View all roles',
    'View all employees',
    'Add a department',
    'Add a role',
    'Add an employee',
    'Update an employee role'
    ]
}];


const mainMenu = [
{
    name: 'main_menu',
    type: 'list',
    message: 'Would you like to return to the main menu?',
    choices: ['Yes', 'No']
}];


const newDepartment = [
    {
        name: 'DepName',
        type: 'input',
        message: 'What is the name of the new department?'
}];


const newRole = [
    {
        name: 'RoleName',
        type: 'input',
        message: 'What is the name of the new Role?'
    },
    {
        name: 'RoleSalary',
        type: 'input',
        message: "What is the salary for this role?"
    },
    {
        name: 'RoleDep',
        type: 'input',
        message: "What department does this role belong to?"
    }
];

// Creates connection between console and mySQL database
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "LaptopWaterParis1027$",
    database: 'company'
},

console.log("Connected to the company database")
);


const mainMenuPrompt = function() {
    inquirer    
    .prompt(mainMenu)

    .then((response)=> {
        if (response.main_menu == 'Yes') {
            runApp();
        } 
    }

)
};

const addDepartment = function() {
    inquirer
    .prompt(newDepartment)

    .then((response)=> {
        connection.query(`INSERT INTO departments (name)
         VALUES ('${response.DepName}')`, (err, results)=> {
    if (err) {
        console.log(err)
    }
    console.table(results);
    mainMenuPrompt();
    })
})
};


const addRole = function() {
    inquirer
    .prompt(newRole)

    .then((response)=> {
        connection.query(`INSERT INTO roles (Title, Salary, Department)
         VALUES ('${response.RoleName}')`, (err, results)=> {
    if (err) {
        console.log(err)
    }
    console.table(results);
    mainMenuPrompt();
    })
})
};




const runApp = function(){
inquirer
    .prompt(firstQuestion)

    .then((response)=> {
        if (response.firstQ == 'View all departments') {
            connection.query(`SELECT * FROM departments`, (err, results)=> {
                if (err) {
                    console.log(err)
                }
                console.table(results);
                mainMenuPrompt();
              })
           

        } else if (response.firstQ == 'View all roles') {
            connection.query(`SELECT * FROM roles`, (err, results)=> {
                if (err) {
                    console.log(err)
                }
                console.table(results);
                mainMenuPrompt();
              })

        } else if (response.firstQ == 'View all employees') {
            connection.query(`SELECT * FROM employees`, (err, results)=> {
                if (err) {
                    console.log(err)
                }
                console.table(results);
                mainMenuPrompt();
              })

        } else if (response.firstQ == 'Add a department') {

        addDepartment();
        
        } else if (response.firstQ == 'Add a role') {

        addRole();

        } else if (response.firstQ == 'Add an employee') {

        } else if (response.firstQ == 'Update an employee role') {

        } 

    })
    .catch((error) => {
        if (error) {
            console.log(error)
}})}

// Displays employees table in console
// connection.query(`SELECT * FROM employees`, (err, results)=> {
//     console.log(results)
// })



runApp();