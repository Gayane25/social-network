const router = require('express').Router()
const Post = require('../models/Post')

router.get('/',(req,res)=>{
    res.send('welcome po posts')
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

