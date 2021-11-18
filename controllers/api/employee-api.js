const router = require('express').Router();
const db = require("../../models");

// Routes
// =============================================================

router.get('/', (req, res) => {
    const query = {};
    if (req.query.employee_id) {
        query.EmployeeId = req.query.employee_id;
    }

    db.Employee.findAll({
        include: [db.Employee],
        where: query
    }).then(dbEmployee => {
        res.json(dbEmployee);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
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
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    console.log(req.body);
    db.Employee.create(req.body).then(dbRoles => {
        res.json(dbEmployee);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
    db.Employee.destroy({
        where: {
            id: req.params.id
        }
    }).then(dbEmployee => {
        res.json(dbEmployee);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
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