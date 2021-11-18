
INSERT INTO department 
    (department_name)
VALUES 
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal');

INSERT INTO roles (title, salary, department_id) 
VALUES 
    ('Sales Lead', 100000, 1),
    ('Sales Person', 80000, 1),
    ('Lead Engineer', 150000, 2),
    ('Engineer', 120000, 2),
    ('Accountant', 125000, 3),
    ('Head of Legal', 250000, 4),
    ('Lawyer', 190000, 4);

INSERT INTO employee 
    (first_name, last_name, role_id)
VALUES
    ('Rick', 'Pick', 1),
    ('Zoey', 'Nelson', 2),
    ('Morty', 'Henderson', 2),
    ('Richard', 'Rahl', 2),
    ('Kahlan', 'Amnell', 3),
    ('Cara', 'Doon', 4),
    ('Felix', 'Felder', 4),
    ('Jaina', 'Neidmeier', 5),
    ('Landon', 'Meier', 5),
    ('Cora', 'Namor', 5),
    ('Kimberly', 'Feldon',5),
    ('Gemma', 'Simmons', 6),
    ('Rebecca', 'Meier', 7),
    ('Albert', 'Wesker', 7),
    ('Misha', 'Yovovich', 7);

-- INSERT INTO managers (complete_name)
-- VALUES
-- ('Andrew Cashman'),
-- ('Danny Littleman'),
-- ('Mike Younder'),
-- ('James Pounder'),
-- ('Sarah Vette');

-- INSERT INTO employee (first_name, last_name, role_id, salary)
-- VALUES
-- ('John', 'Denver', '1', 85000),
-- ('Mike', 'Chang', '5', 110000),
-- ('Ashley', 'Rodriguez', '8', 70000),
-- ('Sherry', 'Hungsinger', '12', 50000),
-- ('Robert', 'Eli', '4', 200000 ),
-- ('Sarah', 'Peterson', '3', 250000),
-- ('Thomas', 'Chamberlin', '6', 80000),
-- ('Christian', 'McCaffery', '9', 400000);

-- INSERT INTO evaluations (employee_id, attendance, work_quality, productivity, communication, job_knowledge) VALUES
-- (1, 3, 3, 4, 2, 3),
-- (2, 2, 3, 4, 4, 3),
-- (3, 3, 3, 4, 5, 2),
-- (4, 3, 5, 4, 2, 3),
-- (5, 2, 3, 4, 2, 4),
-- (6, 4, 3, 4, 3, 3),
-- (7, 2, 4, 4, 1, 4),
-- (8, 3, 4, 4, 5, 5),
-- (9, 3, 4, 4, 5, 5),
-- (10, 3, 3, 4, 2, 3);
