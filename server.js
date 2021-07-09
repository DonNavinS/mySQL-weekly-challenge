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
}
]

// Creates connection between console and mySQL database
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "LaptopWaterParis1027$",
    database: 'company'
},

console.log("Connected to the company database")
);

inquirer
    .prompt(firstQuestion)

    .then((response)=> {
        if (answers.firstQ == 'View all departments') {

        } else if (answers.firstQ == 'View all roles') {

        } else if (answers.firstQ == 'View all employees') {

        } else if (answers.firstQ == 'Add a department') {

        } else if (answers.firstQ == 'Add a role') {

        } else if (answers.firstQ == 'Add an employee') {

        } else if (answers.firstQ == 'Update an employee role') {

        } 
    })


// Displays employees table in console
connection.query(`SELECT * FROM employees`, (err, results)=> {
    console.log(results)
})