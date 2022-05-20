const router = require('express').Router()
const controller = require('../controllers/usersController')
const authMiddleware = require("../middlewares/authMiddleware");
// Update user
// Delete user
// Get a user
// Get all users

// Follow a user
router.patch('/:id/follow',authMiddleware,controller.followUser)
router.patch('/:id/unfollow',authMiddleware,controller.unfollowUser)

// Unfollow a user
// router.get()

module.exports= router