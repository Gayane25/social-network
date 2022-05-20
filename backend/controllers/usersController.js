const User = require('../models/User')
class usersController {

    async followUser(req, res) {
        const currentUserId = req.user.id
        const followUserId = req.params.id

        if(currentUserId === followUserId){
            return res.status(403).json({message:"You can not follow yourself"})
        }
        try {
            const followUser = await User.findById(followUserId)
            const currentUser = await User.findById(currentUserId)
            if(!followUser.followers.includes(currentUserId)){
                await followUser.updateOne({$push:{followers:currentUserId}})
                await currentUser.updateOne({$push:{followings:followUserId}})
                return res.status(200).json({message:'User has been followed'})
            }else{
                return res.status(403).json({message:'You already follow this user'})
            }

        } catch (err) {
            return res.status(500).json({message: err.message})
        }
    }
    async unfollowUser(req, res) {
        const currentUserId = req.user.id
        const unfollowUserId = req.params.id

        if(currentUserId === unfollowUserId){
            return res.status(403).json({message:"You can not unfollow yourself"})
        }
        try {
            const unfollowUser = await User.findById(unfollowUserId)
            const currentUser = await User.findById(currentUserId)
            if(unfollowUser.followers.includes(currentUserId)){
                await unfollowUser.updateOne({$pull:{followers:currentUserId}})
                await currentUser.updateOne({$pull:{followings:unfollowUserId}})
                return res.status(200).json({message:'User has been unfollowed'})
            }else{
                return res.status(403).json({message:'You don\'t follow this user'})
            }

        } catch (err) {
            return res.status(500).json({message: err.message})
        }
    }
    async getUsers(req, res) {
        try {
            const users = await User.find()
            return res.status(200).json({users})
        } catch (err) {
            console.log(err)
        }
    }
}

module.exports = new usersController()