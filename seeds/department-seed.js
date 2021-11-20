const { Department } = require('../models');

const departmentData = [
    {
        department_name: 'Sales'
    },
    {
        department_name: 'Engineering'
    },
    {
        department_name: 'Finance'
    },
    {
        department_name: 'Legal'
    }
]

const seedDepartments = () => Department.bulkCreate(departmentData);

module.exports = seedDepartments;
