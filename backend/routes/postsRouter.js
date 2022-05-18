const router = require('express').Router()
const Post = require('../models/Post')
const postsController = require('../controllers/postsController')
const authMiddleware = require('../middlewares/authMiddleware')

//Get all the posts with  20 post per request
router.get('/',authMiddleware,postsController.getAllPosts)

//Get a specific post
router.get('/:postId',authMiddleware, postsController.getSinglePost)

//Submit a post
router.post('/',authMiddleware, postsController.createPost)


module.exports = router

