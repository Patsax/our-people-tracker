const router = require('express').Router();
const { Department } = require('../../models');

router.get('/', (req, res) => {

    Department.findAll({})
    .then(departmentData => {
        if (!departmentData) {
            res.status(404).json({ message: 'Could not find departments' })
        }
        res.json(departmentData)
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
        }
    })
    .then(departmentData => {
        if (!departmentData) {
            res.status(404).json({ message: 'No department with that id' });
            return;
        }
        res.json(departmentData);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    Department.create({
        department_name: req.body.department_name
    })
    .then(departmentData => res.json(departmentData))
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
});

router.delete('/:id', (req, res) => {
    Department.destroy({
        where: {
            id: req.params.id
        }
    }).then(departmentData => {
        if  (!departmentData) {
            res.status(404).json({ message: 'No department with that id' })
            return;
        }
        res.json(departmentData);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;
