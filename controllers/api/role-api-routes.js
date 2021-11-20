const router = require('express').Router();
const { Role } = require('../../models');

router.get('/', (req, res) => {

    Role.findAll({})
    .then(dbRoles => res.json(dbRoles))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {

    Role.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(dbRoles => {
        if (!dbRoles) {
            res.status(404).json({ message: 'No role with that id' });
            return;
        }
        res.json(dbRoles);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    Role.create({
        title: req.body.title,
        salary: req.body.salary,
        deparment_id: req.body.deparment_id
    })
    .then(dbRoles => res.json(dbRoles))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
    Role.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbRoles => {
        if (!dbRoles) {
            res.status(404).json({ message: 'No role with this id' });
            return;
        }
        res.json(dbRoles);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;
