INSERT INTO departments (Name)
VALUES
("Sales"),
("Marketing"),  
("Engineering"),
("Accounting"),
("Legal");


INSERT INTO roles (Title, Salary, Department, departments_id)
VALUES
("Sales Rep", 80000, "Sales", 0),
("Sales Associate", 90000, "Sales", 0),
("Accountant", 100000, "Accounting", 0),
("Lawyer", 120000, "Legal", 0);


