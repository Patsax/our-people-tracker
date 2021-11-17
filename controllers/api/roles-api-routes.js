const router = require('express').Router();
const db = require('../../models');

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
    }).then(dbRoles => {
        res.json(dbRoles);
    });
});

router.get('/:id', (req, res) => {
    db.Roles.findOne({
        where: {
            id: req.params.id
        },
        include: [db.Roles]
    }).then(dbRoles => {
        res.json(dbRoles);
    });
});

router.post('/', (req, res) => {
    console.log(req.body);
    db.Roles.create(req.body).then(dbRoles => {
        res.json(dbRoles);
    });
});

router.delete('/:id', (req, res) => {
    db.Roles.destroy({
        where: {
            id: req.params.id
        }
    }).then(dbRoles => {
        res.json(dbRoles);
    });
});

router.put('/', (req, res) => {
    db.Roles.update(req.body, {
        where: {
            id: req.body.id
        }
    }).then(dbRoles => {
        res.json(dbRoles);
    });
});

module.exports = router;
