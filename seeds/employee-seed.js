const { Employee } = require('../models');

const employeeData =[
    {
        first_name: 'Rick',
        last_name: 'Pick',
        role_id: 1
    },
    {
        first_name: 'Zoey',
        last_name: 'Nelson',
        role_id: 2
    },
    {
        first_name: 'Morty',
        last_name: 'Henderson',
        role_id: 2
    },
    {
        first_name: 'Richard',
        last_name: 'Rahl',
        role_id: 2
    },
    {
        first_name: 'Kahlan',
        last_name: 'Amnell',
        role_id: 3
    },
    {
        first_name: 'Cara',
        last_name: 'Doon',
        role_id: 4
    },
    {
        first_name: 'Felix',
        last_name: 'Felder',
        role_id: 4
    },
    {
        first_name: 'Jaina',
        last_name: 'Neidmeier',
        role_id: 5
    },
    {
        first_name: 'Landon',
        last_name: 'Meier',
        role_id: 5
    },
    {
        first_name: 'Cora',
        last_name: 'Namor',
        role_id: 5
    },
    {
        first_name: 'Kimberly',
        last_name: 'Feldon',
        role_id: 5
    },
    {
        first_name: 'Gemma',
        last_name: 'Simmons',
        role_id: 6
    },
    {
        first_name: 'Rebecca',
        last_name: 'Meier',
        role_id: 7
    },
    {
        first_name: 'Albert',
        last_name: 'Wesker',
        role_id: 7
    },
    {
        first_name: 'Misha',
        last_name: 'Yovovich',
        role_id: 7
    }
]

const seedEmployees = () => Employee.bulkCreate(employeeData);

module.exports = seedEmployees;
