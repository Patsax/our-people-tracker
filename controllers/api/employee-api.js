const router = require('express').Router();
const { Department, Role, Employee } = require('../../models');

// Routes
// =============================================================

router.get('/', (req, res) => {
    Employee.findAll({})
    .then(dbEmployee => {
        console.log("FIND ALL Employees",dbEmployee)

    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    Employee.findOne({
        where: {
            id: req.params.id
        },
        include: [db.Employee]
    }).then(dbEmployee => {
        res.json(dbEmployee);
    })
});

router.post('/', (req, res) => {
    console.log(req.body);
    Employee.create(req.body).then(dbEmployee => {
        res.json(dbEmployee);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
    Employee.destroy({
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
    Employee.update(req.body, {
        where: {
            id: req.body.id
        }
    }).then(dbEmployee => {
        res.json(dbEmployee);
    });
});

module.exports = router;