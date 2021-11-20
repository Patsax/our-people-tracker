const { Role } = require('../models');
const seedEmployees = require('./employee-seed');

const roleData = [
    {
        title: 'Sales Lead',
        salary: 100000,
        department_id: 1
    },
    {
        title: 'Sales Person',
        salary: 80000,
        department_id: 1
    },
    {
        title: 'Lead Engineer',
        salary: 150000,
        department_id: 2
    },
    {
        title: 'Engineer',
        salary: 120000,
        department_id: 2
    },
    {
        title: 'Accountant',
        salary: 125000,
        department_id: 3
    },
    {
        title: 'Head of Legal',
        salary: 250000,
        department_id: 4
    },
    {
        title: 'Lawyer',
        salary: 190000,
        department_id: 4
    }
]

const seedRoles = () => Role.bulkCreate(roleData);

module.exports = seedRoles;
