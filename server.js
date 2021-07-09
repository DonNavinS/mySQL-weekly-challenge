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
        if (response.firstQ == 'View all departments') {
            connection.query(`SELECT DISTINCT Department FROM employees`, (err, results)=> {
                if (err) {
                    console.log(err)
                }
                console.table(results)
            })

        } else if (response.firstQ == 'View all roles') {

        } else if (response.firstQ == 'View all employees') {

        } else if (response.firstQ == 'Add a department') {

        } else if (response.firstQ == 'Add a role') {

        } else if (response.firstQ == 'Add an employee') {

        } else if (response.firstQ == 'Update an employee role') {

        } 
    })


// Displays employees table in console
// connection.query(`SELECT * FROM employees`, (err, results)=> {
//     console.log(results)
// })