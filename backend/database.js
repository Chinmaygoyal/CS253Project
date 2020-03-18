const { Sequelize, Model, DataTypes } = require("sequelize");
const UserModel = require('./models/user.js');

const sequelize = new Sequelize('first', 'newuser', 'password', {
  host: 'localhost',
  logging: false,
  dialect: 'mysql'
});


sequelize.sync({ force: false })
  .then(() => {
    console.log(`Database & tables created!`)
  })

module.exports = sequelize;