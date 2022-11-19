const jwt  = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')


//@desc Register new user
//@route POST /api/users
const registerUser = asyncHandler(async (req, res) => {
    const {name, email, password, surname } = req.body
    if(!name || !email || !password || !surname){
        res.status(400)
        throw new Error('name, surname, email and password are require')
    }

    const userExists = await User.findOne({email})
    if(userExists){
        res.status(400)
        throw new Error('User already exists')
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await User.create({
        name,
        surname,
        email,
        password: hashedPassword,
    })

    if(user){
        res.status(201).json({
            _id: user.id,
            name: user.name,
            surname: user.surname,
            token: generateToken(user._id),
        })
    }else{
        res.status(400)
        throw new Error('something went wrong')
    }

})

//@desc Login user
//@route POST /api/users/login
const loginUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body
    
    const user = await User.findOne({email})

    if(user && (await bcrypt.compare(password, user.password))){
        res.json({
            _id: user.id,
            name: user.name,
            surname: user.surname,
            email: user.email,
            token: generateToken(user._id),
        })
    }else{
        res.status(400)
        throw new Error('invalid email or password')
    }

})


//@desc Get user data
//@route GET /api/users
const getUserInfo = asyncHandler(async (req, res) => {
    res.status(200).json(req.user)
})


const generateToken = (id) => {
    return jwt.sign({id}, process.env.TOKEN_SECRET, {
        expiresIn: '1h'
    })
}

module.exports = {
    loginUser,
    registerUser,
    getUserInfo,
}