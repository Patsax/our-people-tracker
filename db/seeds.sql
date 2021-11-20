
INSERT INTO department (department_name)
VALUES 
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal');

INSERT INTO role (title, salary, department_id) 
VALUES 
    ('Sales Lead', 100000, 1),
    ('Sales Person', 80000, 1),
    ('Lead Engineer', 150000, 2),
    ('Engineer', 120000, 2),
    ('Accountant', 125000, 3),
    ('Head of Legal', 250000, 4),
    ('Lawyer', 190000, 4);

INSERT INTO employee (first_name, last_name, role_id)
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

