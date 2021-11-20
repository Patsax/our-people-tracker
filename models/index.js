const Department = require('./department');
const Role = require('./role');
const Employee = require('./employee');

Department.hasMany(Role, {
  foreignKey: 'role_id',
  onDelete: 'CASCADE'
});

Role.hasMany(Employee, {
  foreignKey: 'employee_id',
  onDelete: 'CASCADE'
});

Role.belongsTo(Department, {
  foreignKey: 'department_id'
});

Employee.belongsTo(Role, {
  foreignKey: 'role_id'
});

module.exports = { Role, Employee, Department };
