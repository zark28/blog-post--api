const { DataTypes, Model } = require('sequelize');
const {sequelize}=require('../db/dbConfig')


const User = sequelize.define('User', {

    // Model attributes are defined here
    userID:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
  timestamps:true,
  sequelize, // We need to pass the connection instance
  modelName: 'User'
  });

  // `sequelize.define` also returns the model
  // sequelize({ force: true })
(async()=>{
    await sequelize.sync()
})()

  module.exports=User