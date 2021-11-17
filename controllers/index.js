const router = require('express').Router();

const homeRoutes = require('./home-routes');
const departments = require('./department-routes');

router.use('/', homeRoutes);
router.use('/departments', departments);

module.exports = router;