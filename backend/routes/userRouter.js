const router = require('express').Router()
const controller = require('../controllers/usersController')
const authMiddleware = require("../middlewares/authMiddleware");
const rolesMiddleware = require("../middlewares/rolesMiddleware");

// Update user
// Delete user
// Get a user

// Get all users
router.get('/',rolesMiddleware(['ADMIN']), controller.getUsers)

// Follow a user
router.patch('/:id/follow',authMiddleware,controller.followUser)

// Unfollow a user
router.patch('/:id/unfollow',authMiddleware,controller.unfollowUser)



module.exports= router