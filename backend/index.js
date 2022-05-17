const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const helmet = require('helmet')
const morgan = require('morgan')
const postsRoute = require('./routes/posts')

dotenv.config()

mongoose.connect(process.env.MONGO_URL, () => {
    console.log('Connected to mongoDB')
});

//for POST requests body parsing
app.use(express.json())

//for security
app.use(helmet())

//for authentification
app.use(morgan('common'))


app.use('/api/posts', postsRoute)

app.listen(5000, () => {
    console.log('Server is running on Port 5000')
})