const User=require('../model/userModel')
const jwt=require('jsonwebtoken')
const bcrybt =require('bcryptjs')
const authValidator =require('../middlewares/authValidator')


const registerUser =async(req,res)=>{
    try {
        const {error,value}= authValidator.validate(req.body)
        if(error){
            res.status(200).json("Check your credentials")
            console.log();
        }
        const newUser=value
        newUser['password']=bcrybt.hashSync(newUser.password,10)       
        const result = await User.create(newUser)
        const user =result
        res.status(201).json(user)
 
    } catch (error) {
        console.log(error.message);    
    }

}

const loginUser=async(req,res)=>{
    try { 
        
        const {error,value}= authValidator.validate(req.body)
    if(error){
        res.status(200).json("Check your credentials")
        console.log();
    }

        const oldUser=values
        const result = await User.findOne({where:{password:oldUser.password}})
        const userExists =JSON.stringify(result)
        console.log(userExists);
        if(!userExists){
            res.status(400).json("user does not exist")
            return;
        }
        const token =jwt.sign(userExists,process.env.SECRET_KEY)
        res.status(200).json({user:userExists, token:token})
 
    } catch (error) {
        console.log(error);    
    }
}

module.exports={loginUser,registerUser}