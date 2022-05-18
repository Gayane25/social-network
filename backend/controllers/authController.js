const User = require('../models/User')
const Role = require('../models/Role')
const bcrypt = require('bcryptjs')
const {validationResult} = require('express-validator')
const jwt = require('jsonwebtoken')

const generateAccessToken = (id, roles) => {
    const payload = {
        id,
        roles
    }
    return jwt.sign(payload, process.env.TOKEN_SECRET)
}

class authController {
    async registration(req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                const errorMessages = []
                const {errors: errorsObj} = errors
                for (let errorobject of errorsObj) {
                    errorMessages.push(errorobject.msg)
                }
                return res.status(400).json({message: errorMessages})
            }
            const {username, password} = req.body
            const candidate = await User.findOne({username})
            if (candidate) {
                return res.status(400).json({message: 'User with such username is already registered'})
            }
            const hashedPassword = bcrypt.hashSync(password, 7)
            const userRole = await Role.findOne({value: 'USER'})
            const newUser = new User({
                username,
                roles: [userRole.value],
                password: hashedPassword
            })
            const {roles,  _id, username: createdUserName} = await newUser.save()
            const token = generateAccessToken(_id, roles)
            return res.status(200).json({_id, username: createdUserName,token})
        } catch (err) {
            console.log(err)
            res.status(400).json({message: 'Registration failed'})
        }
    }

    async login(req, res) {
        try {
            const {username, password} = req.body
            const user = await User.findOne({username})
            if (!user) {
                return res.status(400).json({message: `User ${username} not found`})
            }
            const valaidPassword = bcrypt.compareSync(password, user.password)
            if (!valaidPassword) {
                return res.status(400).json({message: 'Password incorrect'})
            }
            const {_id, roles, password: userPass, username: loginedUserName} = user
            const token = generateAccessToken(_id, roles)
            return res.status(200).json({_id, username: loginedUserName, token})
        } catch (err) {
            res.status(400).json({message: 'Login failed'})
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

module.exports = new authController()