const express = require('express');
const router = express.Router();
const { login } = require('../controllers/adminController');
const { getAllBlogs, createBlog, updateBlog, deleteBlog } = require('../controllers/blogController');
const { getAllMessages } = require('../controllers/contactController');
const auth = require('../middleware/auth');

router.post('/login', login);
router.get('/blogs', auth, getAllBlogs);
router.post('/blogs', auth, createBlog);
router.put('/blogs/:id', auth, updateBlog);
router.delete('/blogs/:id', auth, deleteBlog);
router.get('/messages', auth, getAllMessages);

module.exports = router;
