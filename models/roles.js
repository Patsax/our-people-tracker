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
        body: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        category: {
            type: DataTypes.STRING,
            defaultValue: 'Personal'
        }
    },
    {
        sequelize
    }
);

module.exports = Roles;
