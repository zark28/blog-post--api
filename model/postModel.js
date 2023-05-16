const { DataTypes } = require('sequelize');
const {sequelize}=require('../db/dbConfig')

const Post = sequelize.define('post', {
    // Model attributes are defined here
    postID:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    title:{
      type:DataTypes.STRING,
      allowNull:false
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userID : {
      type: DataTypes.UUID,
      //SETTING FOREING KEYS
      references: {
        model: 'users',
        key: 'userID'
    } 
  }
  }, {
  timestamps:true
  });
 
  // `sequelize.define` also returns the model
(async()=>{
    await sequelize.sync()
})()
  module.exports=Post