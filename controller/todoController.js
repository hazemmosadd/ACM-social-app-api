const { findByIdAndUpdate } = require("../models/todo.js");
const ToDo = require("../models/todo.js");

const createPost = async (req, res) => {
  console.log("aaaaaaaaa");
  const { text, done, userId } = req.body;
  const todo = new ToDo({ text, done, userId });
  try {
    await todo.save();
    res.send(todo);
  } catch (error) {
    res.send(error);
  }
};

const updatePost = async (req, res) => {
  console.log("aaaaaaaa");
  const { id } = req.params;
  const { text } = req.body;
  try {
    const post = await ToDo.findByIdAndUpdate(id, {text });
    res.send(post);
  } catch (error) {
    res.send(error);
  }
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await ToDo.findByIdAndDelete(id);
    res.send(post);
  } catch (error) {
    res.send(error);
  }
};

const getAllPosts = async  (req , res)=>{
  try {
    const posts = await ToDo.find({}).sort({'createdAt': 1})
    res.send(posts)
  } catch (error) {
    res.send(error)
  }
}

const getMyPosts = async  (req , res)=>{
  const { id } = req.params;
  try {
    const posts = await ToDo.find({userId:id}).sort({'createdAt': 1})
    res.send(posts)
  } catch (error) {
    res.send(error)
  }
}





module.exports = { createPost , updatePost ,  deletePost , getAllPosts , getMyPosts };
