const router = require('express').Router();
const { Department, Role, Employee, Roles } = require('../../models');

// Routes
// =============================================================

router.get('/', (req, res) => {
    Roles.findAll({})
    .then(dbRoles => {
        console.log("FIND ALL DEPARTMENTS",dbRoles)

    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    Roles.findOne({
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
    Roles.create(req.body).then(dbRoles => {
        res.json(dbRoles);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
    Roles.destroy({
        where: {
            id: req.params.id
        }
    }).then(dbRoles => {
        res.json(dbRoles);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.put('/', (req, res) => {
    Roles.update(req.body, {
        where: {
            id: req.body.id
        }
    }).then(dbRoles => {
        res.json(dbRoles);
    });
});

module.exports = router;
