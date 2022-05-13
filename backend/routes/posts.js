const router = require('express').Router()
const Post = require('../models/Post')

router.get('/',(req,res)=>{
    res.send('welcome po posts')
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

