const mysql = require("mysql")
const { Sequelize } = require('sequelize');



const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    //LOGGING IS USED TO HIDE OR SHOW THE GENERATED SQL QUERIES IN THE CONSOLES
    // logging:false 
  });



  const dbClose=()=>{
    sequelize.close()
  }

  // dbConnect()

module.exports={sequelize,dbClose}
