const router = require('express').Router();
const sequelize = require('../config/connection');
const db = require('../models')

router.get('/', (req, res) => {
    res.render('employees', {});
});

module.exports = router;