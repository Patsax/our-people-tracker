DROP DATABASE IF EXISTS our_people_tracker;

CREATE DATABASE our_people_tracker;

USE our_people_tracker;

CREATE TABLE department 
                (id INTEGER AUTO_INCREMENT PRIMARY KEY, 
                department_name VARCHAR(30) NOT NULL
                ); 

CREATE TABLE roles 
                    (id INTEGER AUTO_INCREMENT PRIMARY KEY, 
                    title VARCHAR(30) NOT NULL, 
                    salary DECIMAL NOT NULL,
                    department_id INTEGER NOT NULL,
                    CONSTRAINT fk_department FOREIGN KEY(department_id) REFERENCES department(id) ON DELETE CASCADE
                    );

CREATE TABLE employee 
                    (
                        id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
                        first_name VARCHAR(30) NOT NULL,
                        last_name VARCHAR(30) NOT NULL,
                        role_id INTEGER,
                        hired DATE NOT NULL,
                        salary DECIMAL NOT NULL, 
                        CONSTRAINT fk_role FOREIGN KEY(role_id) REFERENCES roles(id) ON DELETE CASCADE
                    );