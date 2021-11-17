const router = require('express').Router();
const sequelize = require('../config/connection');
const { Department, Role, Employee } = require('../models')

router.get('/', (req, res) => {
    res.render('homepage', {});
});

// router.get('/departments', (req, res) => {
//     res.render('/deparments', {});
// });

// router.get('/roles', (req, res) => {
//     res.render('/roles', {});
// });

// router.get('/employees', (req, res) => {
//     res.render('/employees', {});
// });

module.exports = router;
