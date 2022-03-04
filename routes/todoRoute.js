const express = require("express");
const todoRoute = new express.Router();
const todo =   require("../controller/todoController");

todoRoute.post("/", todo.createPost);
todoRoute.put("/:id", todo.updatePost);
todoRoute.delete("/:id", todo.deletePost);
todoRoute.get("/", todo.getAllPosts);
todoRoute.get("/:id", todo.getMyPosts);

module.exports = todoRoute;
