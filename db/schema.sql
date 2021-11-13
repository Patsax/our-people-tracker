DROP TABLE IF EXISTS employees;
DROP TABLE IF EXISTS evaluations;
DROP TABLE IF EXISTS managers;



CREATE TABLE managers(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    complete_name VARCHAR(30)  
);


CREATE TABLE evalutions(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    attendance INTEGER,
    work_quality INTEGER,
    productivity INTEGER,
    communication INTEGER,
    job_knowledge INTEGER,
    employee_id INTEGER;
);

CREATE TABLE employees(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    employee_id INTEGER,
    manager_id INTEGER,
    roles VARCHAR(30) NOT NULL,
    salary INTEGER,
    date_hired DATE NOT NULL,
    CONSTRAINT fk_roles FOREIGN KEY (employee_id) REFERENCES evalutions(employee_id) ON DELETE SET NULL,
    CONSTRAINT fk_managers FOREIGN KEY (manager_id) REFERENCES managers(id) ON DELETE SET NULL
);
