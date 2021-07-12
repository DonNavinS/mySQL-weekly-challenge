INSERT INTO departments (Name)
VALUES
("Sales"),
("Marketing"),  
("Engineering"),
("Accounting"),
("Legal");


INSERT INTO roles (Title, Salary, Department)
VALUES
("Sales Rep", 80000, "Sales"),
("Sales Associate", 90000, "Sales"),
("Accountant", 100000, "Accounting"),
("Lawyer", 120000, "Legal");



INSERT INTO employees (FirstName, LastName, JobTitle, Department, Salary, Manager)
VALUES
("James", "Wilson", "Accountant", "Accounting", 100000, "Judith"),
("Selena", "Davis", "Lawyer", "Legal", 90000, "Mario"),
("Marcus", "Daniels", "Sales Rep", "Sales", 140000, "Kevin");