const sequelize = require('../database.js');

const User = sequelize.define('user', {
        id: {
            type: sequelize.Sequelize.UUID,
            defaultValue: sequelize.Sequelize.UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        name: sequelize.Sequelize.STRING,
        email: {
            type: sequelize.Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: sequelize.Sequelize.STRING,
            allowNull: false
        },
        role: {
            type: sequelize.Sequelize.STRING,
            allowNull: false
        }
    })

module.exports = User;