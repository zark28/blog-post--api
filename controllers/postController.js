const Post = require("../model/postModel");
const jwt=require("jsonwebtoken")

const getAllPosts = async (req, res) => {
  try {
    const userId=req.params.id
    const result = await Post.findAll({where:{userID:userId}});
    const posts = JSON.stringify(result);
    res.status(201).json(posts);
  } catch (error) {
    console.log(error);
  }
};

const getOnePost = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Post.findByPk(id);
    const post = JSON.stringify(result);
    res.status(201).json(post);
  } catch (error) {
    console.log(error);
  }
};

const createPost = async (req, res) => {
  try {
    const newPost = req.body;
    const {token} =req.headers
    const verifiedToken=jwt.verify(token,process.env.SECRET_KEY)
    if(!verifiedToken){
      res.status(401).json("Unauthorised")
      return;
    }
    // console.log(verifiedToken);
    newPost["userID"]=verifiedToken.userID
    const result = await Post.create(newPost);
    const post = JSON.stringify(result);
    res.status(201).json(post);
  } catch (error) {
    console.log(error);
  }
};

const updatePost = async (req, res) => {
  try {
    const { content } = req.body;
    const postId = req.params;

    if (!content || !userId) {
      res.status(203).json("invalid infomations");
      return;
    }
    const result = await Post.update(
      { content: content },
      {
        where: { postID: postId },
      }
    );

    const post = JSON.stringify(result);
    res.status(201).json(post);
  } catch (error) {
    console.log(error);
  }
};

const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Post.destroy({
      where: {
        postID: id,
      },
    });
    const post = JSON.stringify(result);
    res.status(201).json(post);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllPosts,
  getOnePost,
  createPost,
  updatePost,
  deletePost,

};
