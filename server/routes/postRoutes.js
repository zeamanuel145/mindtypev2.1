const express = require('express');
const router = express.Router();
const { createPost, updatePost, deletePost, getPosts, getPostById, addCommentToPost, getMyPosts } = require('../controllers/postController');
const authMiddleware = require('../middleware/authMiddleware');

//Private
router.post('/', createPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);
router.get('/mine', authMiddleware, getMyPosts);
router.post('/:id/comments', authMiddleware, addCommentToPost);

//Public
router.get('/', getPosts);
router.get('/:id', getPostById);

module.exports = router;
