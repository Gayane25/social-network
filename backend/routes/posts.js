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

router.post('/create', async (req, res) => {
    try {
        const {userId, title, description, image} = req.body
        const post = await new Post({
            owner: userId,
            content: {
                title: title,
                description: description,
                image: image
            },
        })
        await post.save()
        res.send('Your post was successfully added')
    } catch (err) {
        res.send('Check Your data and try again')
    }

})


module.exports = router

