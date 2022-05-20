const express = require('express')
const app = express()

const mongoose = require('mongoose')
const dotenv = require('dotenv')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')

const postsRoute = require('./routes/postsRouter')
const authRoute = require('./routes/authRouter')
const userRoute = require('./routes/userRouter')

dotenv.config()
const PORT = process.env.SERVER_PORT || 5000
const HOST = process.env.HOST || 'localhost'


app.use(cors())
app.use(express.json())
app.use(helmet())
app.use(morgan('common'))
app.use('/api/posts', postsRoute)
app.use('/api/auth', authRoute)
app.use('/api/user',userRoute)

mongoose.connect(process.env.MONGO_URL, () => {
    console.log('Connected to mongoDB')
})

app.listen(PORT, HOST,() => {
    console.log(`Server is running on Port ${PORT}`)

})





