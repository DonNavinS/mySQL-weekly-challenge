const inquirer = require('inquirer');
const cTable = require('console.table');
const mysql = require('mysql2');






// Creates connection between console and mySQL database
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "LaptopWaterParis1027$",
    database: 'company'
},

console.log("Connected to the company database")
);



// The following are arrays of questions used as prompts in the inquirer package
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


const newEmployee = [
    {
        name: 'EmpFirstName',
        type: 'input',
        message: "What is the employee's first name?"
    },
    {
        name: 'EmpLastName',
        type: 'input',
        message: "What is the employee's last name?"
    },
    {
        name: 'EmpJobTitle',
        type: 'input',
        message: "What is the employee's job title?"
    },
    {
        name: 'EmpManager',
        type: 'input',
        message: "Who is the employee's manager?"
    },
    {
        name: 'EmpDep',
        type: 'input',
        message: "What department does this employee belong to?"
    },
    {
        name: 'EmpSalary',
        type: 'input',
        message: "What is this employee's salary?"
    }
];


const updateEmp = [
    {
        name: 'EmployeeID',
        type: 'input',
        message: "What is the ID of the employee whose information you would like to change?"
    },
    {
        name: 'FirstName',
        type: 'input',
        message: 'What would you like to change the first name to?'
    },
    {
        name: 'LastName',
        type: 'input',
        message: 'What would you like to change the last name to?'
    },
    {
        name: 'JobTitle',
        type: 'input',
        message: "What would you like to change the job title to?"
    },
    {
        name: 'Manager',
        type: 'input',
        message: 'Who would you like to change the manager to?'
    },
    {
        name: 'Department',
        type: 'input',
        message: 'What would you like to change the department to?'
    },
    {
        name: 'Salary',
        type: 'input',
        message: 'What would you like to change the salary to?'
    }
]



// This allows user to return to main menu after already using the application
const mainMenuPrompt = function() {
    inquirer    
    .prompt(mainMenu)

    .then((response)=> {
        if (response.main_menu == 'Yes') {
            runApp();
        } else if (response.main_menu == 'No') {
            process.exit();
        } 
    }

)
};




// The following functions are to add or update records to the tables
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
         VALUES ('${response.RoleName}','${response.RoleSalary}','${response.RoleDep}')`, (err, results)=> {
    if (err) {
        console.log(err)
    }
    console.table(results);
    mainMenuPrompt();
    })
})
};



const addEmployee = function() {
    inquirer
    .prompt(newEmployee)

    .then((response)=> {
        connection.query(`INSERT INTO employees (FirstName, LastName, JobTitle, Manager, Department, Salary)
         VALUES ('${response.EmpFirstName}','${response.EmpLastName}','${response.EmpJobTitle}','${response.EmpManager}','${response.EmpDep}','${response.EmpSalary}')`, (err, results)=> {
    if (err) {
        console.log(err)
    }
    console.table(results);
    mainMenuPrompt();
    })
})
};



const updateEmployee = function() {
    inquirer
    .prompt(updateEmp)

    .then((response)=> {
        const sql = `UPDATE employees SET FirstName = '${response.FirstName}', LastName = '${response.LastName}', JobTitle = '${response.JobTitle}', Manager = '${response.Manager}', Department = '${response.Department}', Salary = '${response.Salary}' WHERE EmployeeID = '${response.EmployeeID}'`
        connection.query(sql, (err, results)=> {
            if (err) {
                console.log(err);
            }
            console.table(results);
            mainMenuPrompt();
        })

    }
    )}



// This function runs the CLI application and is recalled by the mainMenuPrompt() function to return to the main menu
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
            
        addEmployee();
        

        } else if (response.firstQ == 'Update an employee role') {
            connection.query(`SELECT * FROM employees`, (err, results)=> {
                if (err) {
                    console.log(err)
                }
                console.table('\n', results);
                
              })
            
        updateEmployee();
            

        } 

    })
   }




runApp();