const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');

// const Blog = require('./models/blog');
// const comment = require('./models/comment');


const path = require('path');
const cors = require('cors');
const blogRoutes = require('./routes/blogs');

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/blogs', blogRoutes);




// app.post('/blogs/add-blog', async (req, res, next) => {
//   try {
//     const { title, author, description } = req.body;
//     const data = await Blog.create({ title, author, description });
//     res.status(201).json({ newBlog: data });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// app.get('/blogs/get-blogs', async (req, res, next) => {
//   try {
//     const blogs = await Blog.findAll();
//     res.status(200).json({ allBlogs: blogs });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// app.post('/blogs/add-comment/:blogId', async (req, res, next) => {
//   try {
//     const { blogId } = req.params;
//     const { text} = req.body;

//     const blog = await Blog.findByPk(blogId);
//     if (!blog) {
//       return res.status(404).json({ error: 'Blog not found' });
//     }

//     const comment = await Comment.create({ text, BlogId: blogId });

//     res.status(201).json({ newComment: comment });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// app.delete('/blogs/delete-comment/:commentId', (req, res) => {
//   const commentId = req.params.commentId;

  
//   Comment.destroy({ where: { id: commentId } })
//     .then(() => {
//       res.sendStatus(204); 
//     })
//     .catch((err) => {
//       console.error(err);
//       res.sendStatus(500); 
//     });
// });

// app.get('/blogs/get-comments/:blogId', async (req, res, next) => {
//   try {
//     const  blogId  = req.params;
//     const comments = await Comment.findAll({
//       where: { BlogId: blogId },
//     });

//     res.status(200).json({ comments });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

sequelize
  .sync()
  .then(() => {
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch((error) => {
    console.log(error);
  });

  

