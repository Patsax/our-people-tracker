const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Roles extends Model { }

Roles.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
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
            allowNull: false,
            defaultValue: 'Personal'
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'role'
    }
);

module.exports = Roles;
