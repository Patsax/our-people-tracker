const router = require('express').Router();
const departmentRoutes = require('./department-api-routes');
const roleRoutes = require('./role-api-routes');
const employeeRoutes = require('./employee-api');

router.use('/department', departmentRoutes);
router.use('/role', roleRoutes);
router.use('/employee', employeeRoutes);

module.exports = router;
