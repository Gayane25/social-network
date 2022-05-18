const Post = require("../models/Post");

class postsController {
    async getSinglePost(req, res) {
        try {
            const postId = req.params.postId
            const singlePost = await Post.findById(postId)
            res.send(singlePost)
        } catch (err) {
            res.json({message: 'No post found with such Id'})
        }
    }

    async getAllPosts(req, res) {
        try {
            const pageNumber = req.query._page || 1
            const limit = req.query._limit || 20
            const offset = pageNumber * limit - limit
            const posts = await Post.find({owner:req.user.id}).skip(offset).limit(limit)
            res.send(posts)
        } catch (err) {
            res.json({message: 'Try later...'})
        }
    }

    async createPost(req, res) {
        try {
            const { content_title, content_description, content_image_url} = req.body
            const post = await new Post({
                owner: req.user.id,
                content: {
                    title: content_title,
                    description: content_description,
                    image: content_image_url
                },
            })
            const addedPOst = await post.save().then(data => data)
            res.send(addedPOst)
        } catch (err) {
            res.json({message: 'Check sent data and try again'})
        }

    }
}

module.exports = new postsController()