const router = require('express').Router;
const { Department } = require('../models');

//TODO: Get all departments
router.get('/api/deparments', (req, res) => {
    Department.findAll({})
        .then((departments) => res.json(departments))
        .catch(err => console.log(err));
});

//TODO: Get single department
router.get('/api/department/:id', (req, res) => {
    Department.findOne({
        where: {
            id: req.params.id
        }
    })
        .then((department) => res.json(department))
        .catch(err => console.log(err));
});

//TODO: Create a department
router.post('api/category', (req, res) => {
    Department.create({
        department_name: req.body.department_name
    }).then(Department => {
        res.json(Department);
    }).catch(err => console.log(err));
});

//TODO: Update a department

//TODO: Delet a department

module.exports = router;