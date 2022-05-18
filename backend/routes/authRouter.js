const router = require('express').Router()
const controller = require('../controllers/authController')
const {check} = require('express-validator')
const rolesMiddleware = require('../middlewares/rolesMiddleware')

router.post('/registration',[
    check('username','Username can not be empty').notEmpty(),
    check('password', 'Password must be with  min 4 and maximum 10 length').isLength({min:4,max:10})
],controller.registration)
router.post('/login', controller.login)
router.get('/users',rolesMiddleware(['ADMIN']), controller.getUsers)

module.exports=router