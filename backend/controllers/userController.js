const jwt  = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')


//@desc Register new user
//@route POST /api/users
const registerUser = asyncHandler(async (req, res) => {
    const {name, email, password, secondName } = req.body
    if(!name || !email || !password || !secondName){
        res.status(400)
        throw new Error('name, secondName, email and password are require')
    }

    const userExists = await User.findOne({email})
    if(userExists){
        res.status(400)
        throw new Error('User already exists')
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const newUser = await User.create({
        name,
        secondName,
        email,
        password: hashedPassword,
    })

    if(newUser){
        res.status(201).json({
            _id: newUser.id,
            name: newUser.name,
            secondName: newUser.secondName,
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
            secondName: user.secondName,
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
    
    const {_id, name, email} = await User.findById(req.user.id)

    res.status(200).json({
        id: _id,
        name,
        email
    })
})


const generateToken = (id) => {
    return jwt.sign({id}, process.env.TOKEN_SECRET, {
        expiresIn: '2d'
    })
}

module.exports = {
    loginUser,
    registerUser,
    getUserInfo,
}