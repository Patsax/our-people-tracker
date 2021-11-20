const router = require('express').Router();
const sequelize = require('../config/connection');
const { Department, Role, Employee } = require('../models');

router.get('/', (req, res) => {
    res.render('homepage', {});
});

router.get('/department', (req, res) => {
    console.log('====================')
    console.log( 'hello' )
    Department.findAll({
        attributes: [
            'id',
            'department_name'
            // [sequelize.literal('SELECT COUNT(*) FROM departments')]
        ]
    })
    .then(departmentData => {
        console.log(departmentData);
        const depts = departmentData.map(dept => dept.get({ plain: true }));

        res.render('departments', {
            depts
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
    // res.render('departments');
});

router.get('/roles', (req, res) => {
    Role.findAll({
        attributes: [
            'id',
            'title',
            'salary',
            'department_id'
            // [sequelize.literal('SELECT COUNT(*) FROM departments')]
        ]
    })
    .then(roleData => {
        console.log(roleData);
        const roles = roleData.map(role => role.get({ plain: true }));

        res.render('roles', {
            roles
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/employees', (req, res) => {
    Employee.findAll({
        attributes: [
            'id',
            'first_name',
            'last_name',
            'role_id'
            // [sequelize.literal('SELECT COUNT(*) FROM departments')]
        ]
    })
    .then(employeeData => {
        console.log(employeeData);
        const employees = employeeData.map(employee => employee.get({ plain: true }));

        res.render('employees', {
            employees
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});







// router.post("/login", (req, res) => {
//     //console.log("request received");
    

//     User.findOne({
//         where: {
//             email: req.body.email,
//         },
//     })
//         .then((dbUserData) => {
//             if (!dbUserData) {
//                 res.status(400).json({ message: "User not found" });
//                 return;
//             }
//             const validPassword = dbUserData.checkPassword(req.body.password);

//             if (!validPassword) {
//                 res.status(400).json({ message: "Incorrect Password!" });
//                 return;
//             }

//             req.session.save(() => {
//                 //declare session variables
//                 req.session.user_id = dbUserData.id;
//                 req.session.username = dbUserData.username;
//                 req.session.loggedIn = true;
//                 //send response
//                 res.json({ user: dbUserData, message: "You are now logged in!" });
//             });
//         })
//         .catch((err) => {
//             console.log(err);
//             res.status(500).json(err);
//         });
//     });

module.exports = router;
