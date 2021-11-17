const router = require('express').Router();
const sequelize = require('../config/connection');
const { Department, Role, Employee } = require('../models');

router.get('/department', (req, res) => {
    Department.findall({
        attributes: [
            'id',
            'name',
            [sequelize.literal('(SELECT FROM(*) FROM department)')]
        ]
    })
    .then(dbDepartmentData => {
        const departments = dbDepartmentData.map(department.get({ plain: true }));

        res.render('departments', {
            departments
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;
