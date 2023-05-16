const express = require("express");
require("dotenv").config();
const {sequelize} =require('./db/dbConfig')

const app = express();
app.use(express.json())

const userRoutes=require('./routes/userRoutes')
const postRoutes=require('./routes/postRoutes')
const authRoutes=require('./routes/authRoutes')

app.use('/auth',authRoutes)
app.use('/users',userRoutes)
app.use("/posts",postRoutes)


app.use("*",(req,res)=>{
    res.status(404).json("Error 404,Page Not Found")
})

async()=>{
    try {
        await sequelize.authenticate();

        console.log('Connection has been established successfully.');

        app.listen(process.env.PORT, ()=>{console.log(`Server listening on port ${ process.env.PORT}`)})
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
  }

