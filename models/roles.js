const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Roles extends Model { }

Roles.init(
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 160]
            }
        },
        salary: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        department_id: {
            type: DataTypes.INTEGER,
            defaultValue: 'Personal'
        }
    },
    {
        sequelize
    }
);

module.exports = Roles;
