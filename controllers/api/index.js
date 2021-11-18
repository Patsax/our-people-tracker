const router = require('express').Router();
const employeeRoutes = require('./employee-api');
const rolesRoutes = require('./roles-api-routes');
const departmentRoutes = require('../api/department-api-routes');

router.use('/employee', employeeRoutes);
router.use('/roles', rolesRoutes);
router.use('/department', departmentRoutes);

module.exports = router;