const express =require('express')
const router =express.Router()
const userController=require('../controllers/userController')


router.get("/admin/",userController.getAllUsers)
router.put("/:id",userController.updateUser)
router.delete("/:id",userController.deleteOne)

module.exports=router