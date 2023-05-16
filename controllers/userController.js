
const User=require('../model/userModel')

const getAllUsers=async(req,res)=>{
    try {

        // const result = await User.findAll()
        // const users =result
        // res.status(201).json(users)
 
    } catch (error) {
        console.log(error.message); 
        res.status().json(error.message)
    }
}

const getOneUser=async(req,res)=>{
    try {
        const {id}=req.params
        const result = await User.findByPk(id)
        const user =JSON.stringify(result)
        res.status(201).json(user)
 
    } catch (error) {
        console.log(error);    
    }

}


const updateUser=async(req,res)=>{
    try {
        const {updateUserName,updatePassword}=req.body
        const updateUserId=req.params
        let result;

        if(!updateUserName&&!updatePassword){
            res.status(203).json('invalid infomations')
            return

        }
        if(updateUserName&&updatePassword){
            result = await User.update({ userName:updateUserName, password:updatePassword }, {
                where: { userID:updateUserId }
               });

        }
        if(!updateUserName&&updatePassword){
             result = await User.update({password:updatePassword }, {
                 where: { userID:updateUserId }
               });
        }
        if(updateUserName&&!updatePassword){
             result = await User.update({userName:updateUserName }, {
                 where: { userID:updateUserId }
               });
        }


        const user =JSON.stringify(result)
        res.status(201).json(user)
 
    } catch (error) {
        console.log(error);    
    }

}

const deleteOne=async(req,res)=>{
    try {
        const {id}=req.params
       const result= await User.destroy({
            where: {
                userID: id
            }
        });
        const user =JSON.stringify(result)
        res.status(201).json(user)

 
    } catch (error) {
        console.log(error);    
    }

}

module.exports={
    getAllUsers,
    getOneUser,
    updateUser,
    deleteOne,
}