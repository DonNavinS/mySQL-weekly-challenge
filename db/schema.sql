DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS departments;
DROP TABLE IF EXISTS employees;





CREATE TABLE departments (
   ID INT AUTO_INCREMENT,
   Name VARCHAR(30),
   PRIMARY KEY (ID)
);



CREATE TABLE roles (
   role_id INT AUTO_INCREMENT,
   Title VARCHAR(30),
   Salary decimal,
   Department VARCHAR(30),
   departments_id INT,
   PRIMARY KEY (role_id),
   FOREIGN KEY (departments_id)
   REFERENCES departments(ID) ON UPDATE CASCADE 

);





CREATE TABLE employees (
    employee_id INTEGER AUTO_INCREMENT,
    FirstName VARCHAR(30),
    LastName VARCHAR(30),
    JobTitle VARCHAR(30),
    Department VARCHAR(30),
    Salary decimal,
    Manager VARCHAR(30),

    PRIMARY KEY (employee_id)

);