const router = require('express').Router();
const db = require("../../models");

// Routes
// =============================================================

router.get('/', (req, res) => {
    const query = {};
    if (req.query.employee_id) {
        query.EmployeeId = req.query.employee_id;
    }

    db.Roles.findAll({
        include: [db.Roles],
        where: query
    }).then(dbEmployee => {
        res.json(dbEmployee);
    });
});

router.get('/:id', (req, res) => {
    db.Employee.findOne({
        where: {
            id: req.params.id
        },
        include: [db.Employee]
    }).then(dbEmployee => {
        res.json(dbEmployee);
    });
});

router.post('/', (req, res) => {
    console.log(req.body);
    db.Employee.create(req.body).then(dbRoles => {
        res.json(dbEmployee);
    });
});

router.delete('/:id', (req, res) => {
    db.Employee.destroy({
        where: {
            id: req.params.id
        }
    }).then(dbEmployee => {
        res.json(dbEmployee);
    });
});

router.put('/', (req, res) => {
    db.Employee.update(req.body, {
        where: {
            id: req.body.id
        }
    }).then(dbEmployee => {
        res.json(dbEmployee);
    });
});

module.exports = router;