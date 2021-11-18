const router = require('express').Router();
const { Department, Role, Employee } = require('../../models');

// Routes
// =============================================================

router.get('/', (req, res) => {

    // const query = {};
    // if (req.query.employee_id) {
    //     query.EmployeeId = req.query.employee_id;
    //     console.log()
    // }

    Department.findAll({})
    .then(dbDepartment => {
        console.log("FIND ALL DEPARTMENTS",dbDepartment)

    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    Department.findOne({
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
    Department.create(req.body).then(dbDepartment => {
        res.json(dbDepartment);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
    Department.destroy({
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
    Department.update(req.body, {
        where: {
            id: req.body.id
        }
    }).then(dbDepartment => {
        res.json(dbDepartment);
    });
});

module.exports = router;
