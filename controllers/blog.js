const Blog = require('../models/blog');
const Comment = require('../models/comment');

const addBlog = async (req, res) => {
  try {
    const title= req.body.title;
    const author=req.body. author;
    const description = req.body.description;
    const data = await Blog.create({ title:title, author:author, description:description });
    res.status(201).json({ newBlog: data });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.findAll();
    res.status(200).json({ allBlogs: blogs });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

const addComment = async (req, res) => {
  try {
    const  blogId = req.params.blogId;
    const  text  = req.body.text;
    const comment = await Comment.create({ text, BlogId: blogId });

    res.status(201).json({ newComment: comment });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

const deleteComment = async (req, res) => {
  const commentId = req.params.commentId;

  try {
    await Comment.destroy({ where: { id: commentId } });
    res.sendStatus(204);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const getComments = async (req, res) => {
  try {
    const blogId = req.params.blogId;
    const comments = await Comment.findAll({ where: { BlogId: blogId } });
    res.status(200).json({ comments });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'error' });
  }
};


module.exports ={
  addBlog,
  getBlogs,
  addComment, 
  deleteComment,
  getComments
}


