const router = require('express').Router();
const sequelize = require('../../config/connection');
// const { Department, Role, Employee } = require('../../models');

// Routes
// =============================================================

router.get('/', (req, res) => {
    const query = {};
    if (req.query.employee_id) {
        query.EmployeeId = req.query.employee_id;
    }

    db.Department.findAll({
        include: [db.Department],
        where: query
    }).then(dbDepartment => {
        res.json(dbDepartment);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    db.Department.findOne({
        where: {
            id: req.params.id
        },
        include: [db.Department]
    }).then(dbDepartment => {
        res.json(dbDepartment);
    });
});

router.post('/', (req, res) => {
    console.log(req.body);
    db.Department.create(req.body).then(dbDepartment => {
        res.json(dbDepartment);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
    db.Department.destroy({
        where: {
            id: req.params.id
        }
    }).then(dbDepartment => {
        res.json(dbDepartment);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.put('/', (req, res) => {
    db.Department.update(req.body, {
        where: {
            id: req.body.id
        }
    }).then(dbDepartment => {
        res.json(dbDepartment);
    });
});

module.exports = router;
