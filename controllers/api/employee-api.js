const router = require('express').Router();
const { Employee } = require("../../models");

router.get('/', (req, res) => {

    Employee.findAll({})
    .then(dbEmployee => res.json(dbEmployee))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    Employee.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(dbEmployee => {
        if (!dbEmployee) {
            res.status(404).json({ message: 'No role with that id' });
            return;
        }
        res.json(dbEmployee);
    })
});

router.post('/', (req, res) => {

    Employee.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        role_id: req.body.role_id
    })
    .then(dbEmployee => res.json(dbEmployee))
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
});

router.delete('/:id', (req, res) => {
    Employee.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbEmployee => {
        if (!dbEmployee) {
            res.status(404).json({ message: 'No employee with that id' });
            return;
        }
        res.json(dbEmployee)
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;