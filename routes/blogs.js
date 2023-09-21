const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blog');

router.post('/add-blog', blogController.addBlog);
router.get('/get-blogs', blogController.getBlogs);
router.post('/add-comment/:blogId', blogController.addComment);
router.delete('/delete-comment/:commentId', blogController.deleteComment);
router.get('/get-comments/:blogId', blogController.getComments);

module.exports = router;



