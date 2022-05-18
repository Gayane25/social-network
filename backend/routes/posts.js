const router = require('express').Router()
const Post = require('../models/Post')

router.get('/',async (req,res)=>{
    try{
        const pageNumber = req.query._page || 1
        const limit = req.query._limit || 20
        const offset = pageNumber * limit - limit
        const posts = await Post.find().skip(offset).limit(limit)
        res.send(posts)
    }catch(err){
        res.json({message:'Try later...'})
    }
})

router.post('/', async (req, res) => {
    try {
        const {userId, content_title, content_description, content_image_url} = req.body
        const post = await new Post({
            owner: userId,
            content: {
                title: content_title,
                description: content_description,
                image: content_image_url
            },
        })
        const addedPOst  = await post.save().then(data => data)
        res.send(addedPOst)
    } catch (err) {
        res.send('Check Your data and try again')
    }

})


module.exports = router

