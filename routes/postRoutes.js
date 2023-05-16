const express =require('express')
const router =express.Router()
const postController=require('../controllers/postController')


router.get("/all/:id",postController.getAllPosts)
// router.get("/:id",)
router.post("/addpost",postController.createPost)
router.get("/:id",postController.getOnePost)
// router.put("/:id",userController.updateUser)
// router.delete("/:id",userController.deleteOne)

module.exports=router