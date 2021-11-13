INSERT INTO managers (complete_name)
VALUES
('Andrew Cashman'),
('Danny Littleman'),
('Mike Younder'),
('James Pounder'),
('Sarah Vette');

INSERT INTO employees (first_name, last_name, employee_id, manager_id, roles, salary, date_hired)
VALUES
('John', 'Denver', 601, 3, 'Engineer', 85000, 2001-01-31 ),
('Mike', 'Chang', 502, 2, 'Sales', 110000, 2002-02-14),
('Ashley', 'Rodriguez', 402, 4, 'Quality Control', 70000, 2003-02-14),
('Sherry', 'Hungsinger', 933, 5, 'Janitor', 50000, 2020-08-20),
('Robert', 'Eli', 501, 2, 'Sales', 200000, 1999-07-05),
('Sarah', 'Peterson', 202, 1, 'President', 250000, 1993-05-23),
('Thomas', 'Chamberlin', 406, 4, 'Human Resources', 80000, 1996-06-21),
('James', 'Bonder', 301, 1, 'Vice-President', 170000, 1993-06-02),
('Jack', 'Hoffer', 404, 4, 'Human Resources', 80000, 1995-03-02),
('Christian', 'McCaffery', 101, 1,'CEO/COO', 400000, 1993-05-22);

INSERT INTO evalutions (attendance, work_quality, productivity, communication, job_knowledge) VALUES
(3, 3, 4, 2, 3, 502),
(2, 3, 4, 4, 3, 933),
(3, 3, 4, 5, 2, 202),
(3, 5, 4, 2, 3, 406),
(2, 3, 4, 2, 4, 404),
(4, 3, 4, 3, 3, 101),
(2, 4, 4, 1, 4, 301),
(3, 4, 4, 5, 5, 501),
(3, 4, 4, 5, 5, 601),
(3, 3, 4, 2, 3, 402);