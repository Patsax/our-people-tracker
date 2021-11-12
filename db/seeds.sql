INSERT INTO managers (complete_name)
VALUES
('Andrew Cashman'),
('Danny Littleman'),
('Mike Younder'),
('James Pounder'),
('Sarah Vette');

INSERT INTO employees (first_name, last_name, employee_id, manager_id, roles, salary, date_hired)
VALUES
('John', 'Denver', 2, 5, 'Engineer', 85000, 2001-01-31 ),
('Mike', 'Chang', 6, 2, 'Sales', 110000),
('Ashley', 'Rodriguez', 3, 4, 'Quality Control', 70000, 2003-02-14),
('Sherry', 'Hungsinger', 7, 1, 'Janitor', 50000),
('Robert', 'Eli', 1, 4, 'Vice President', 200000 ),
('Sarah', 'Peterson', 4, 2, 'President', 250000),
('Thomas', 'Chamberlin', 2, 4, 'Human Resources', 80000),
('Christian', 'McCaffery', 3, 3 'CEO/COO', 400000);

INSERT INTO evalutions (employee_id, attendance, work_quality, productivity, communication, job_knowledge) VALUES
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