/*
INSERT INTO department (id, name)
VALUES 
    (1, 'Sales'),
    (2, 'Engineering'),
    (3, 'Finance'),
    (4, 'Legal');

INSERT INTO role (id, title, salary, department_id) 
VALUES 
    (1, 'Sales Lead', 100000, 1),
    (2, 'Sales Person', 80000, 1),
    (3, 'Lead Engineer', 150000, 2),
    (4, 'Engineer', 120000, 2),
    (5, 'Accountant', 125000, 3),
    (6, 'Head of Legal', 250000, 4),
    (7, 'Lawyer', 190000, 4);

INSERT INTO employee (id, first_name, last_name, role_id,)
VALUES
    (1, 'Rick', 'Pick', 1, NULL),
    (2, 'Zoey', 'Nelson', 2, 1),
    (3, 'Morty', 'Henderson', 2, 1),
    (4, 'Richard', 'Rahl', 2, 1),
    (5, 'Kahlan', 'Amnell', 3, NULL),
    (6, 'Cara', 'Doon', 4, 5),
    (7, 'Felix', 'Felder', 4, 5),
    (8, 'Jaina', 'Neidmeier', 5, NULL),
    (9, 'Landon', 'Meier', 5, NULL),
    (10, 'Cora', 'Namor', 5, NULL),
    (11, 'Kimberly', 'Feldon',5, NULL),
    (12, 'Gemma', 'Simmons', 6, NULL),
    (13, 'Rebecca', 'Meier', 7, 12),
    (14, 'Albert', 'Wesker', 7, 12),
    (15, 'Misha', 'Yovovich', 7, 12);

INSERT INTO managers (complete_name)
VALUES
('Andrew Cashman'),
('Danny Littleman'),
('Mike Younder'),
('James Pounder'),
('Sarah Vette');

INSERT INTO employee (first_name, last_name, role_id, salary)
VALUES
('John', 'Denver', '1', 85000),
('Mike', 'Chang', '5', 110000),
('Ashley', 'Rodriguez', '8', 70000),
('Sherry', 'Hungsinger', '12', 50000),
('Robert', 'Eli', '4', 200000 ),
('Sarah', 'Peterson', '3', 250000),
('Thomas', 'Chamberlin', '6', 80000),
('Christian', 'McCaffery', '9', 400000);

INSERT INTO evaluations (employee_id, attendance, work_quality, productivity, communication, job_knowledge) VALUES
(1, 3, 3, 4, 2, 3),
(2, 2, 3, 4, 4, 3),
(3, 3, 3, 4, 5, 2),
(4, 3, 5, 4, 2, 3),
(5, 2, 3, 4, 2, 4),
(6, 4, 3, 4, 3, 3),
(7, 2, 4, 4, 1, 4),
(8, 3, 4, 4, 5, 5),
(9, 3, 4, 4, 5, 5),
(10, 3, 3, 4, 2, 3);
