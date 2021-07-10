CREATE TABLE departments (
    departments_id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30)
);



CREATE TABLE roles (
    role_id INTEGER AUTO_INCREMENT PRIMARY KEY,
    Title VARCHAR(30),
    Salary decimal,
    Department VARCHAR(30),
    departments_id INTEGER,
    FOREIGN KEY (departments_id)
    REFERENCES departments(departments_id)
);



CREATE TABLE employees (
    EmployeeID INTEGER AUTO_INCREMENT PRIMARY KEY,
    FirstName VARCHAR(30),
    LastName VARCHAR(30),
    JobTitle VARCHAR(30),
    Department VARCHAR(30),
    Salary decimal,
    Manager VARCHAR(30),
    role_id INTEGER FOREIGN KEY (role_id) REFERENCES roles(role_id)

);