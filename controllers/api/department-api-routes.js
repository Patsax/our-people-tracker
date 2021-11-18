const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Department } = require('../../models');

// Routes
// =============================================================


router.get('/', (req, res) => {
    /*const query = {};
    if (req.query.employee_id) {
        query.EmployeeId = req.query.employee_id;
    }*/
    console.log('route match');
    Department.findAll({})
        .then((response) => res.json(response))
        .then((data) => res.send(data))
        .catch(err => console.log(err));
 
});

/*router.get('/:id', (req, res) => {
    db.Department.findOne({
        where: {
            id: req.params.id
        },
        include: [db.Department]
    }).then(dbDepartment => {
        res.json(dbDepartment);
    });
});

router.post('/department', (req, res) => {
    console.log(req.body);
    db.Department.create(req.body).then(dbDepartment => {
        res.json(dbDepartment);
    });
});

router.delete('/department/:id', (req, res) => {
    db.Department.destroy({
        where: {
            id: req.params.id
        }
    }).then(dbDepartment => {
        res.json(dbDepartment);
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
});*/

module.exports = router;
