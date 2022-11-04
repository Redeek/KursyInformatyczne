const jwt  = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

//@desc Login user
//@route POST /api/users/login
const loginUser = async (req, res) => {
    res.json({message: 'Register'})
} 


//@desc Register new user
//@route POST /api/users
const registerUser = async (req, res) => {
    res.json({message: 'Register'})
}


//@desc Get user data
//@route GET /api/users
const getUserInfo = async (req, res) => {
    res.json({message: 'info about me'})
}


module.exports = {
    loginUser,
    registerUser,
    getUserInfo,
}