const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  username: String,
  posttext: String
})

const Post = mongoose.model("Post", postSchema);

async function create(userID, posttext) {
    const newPost = await Post.create({
      username: userID,
      posttext: posttext

    });
  
    return newPost;
  }

//read
async function fetch(userID) {
    const post = await getPost(userID);
    if(!post) throw Error('post not found');
    return post;
  }

//update
async function updatePost(id, newText) {
    const post = await post.updateOne({username: id}, {$set: { posttext: newText}});
    return post;
  }

//Delete
async function deletePost(id) {
    await Post.deleteOne({"_id": id});
  };
  
// utility functions
async function getPost(username) {
    return await Post.find({ "username": username});
  }
  
  // 5. export all functions we want to access in route files
  module.exports = {create, fetch, updatePost, deletePost, getPost};
