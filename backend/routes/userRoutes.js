const express = require('express')
const {loginUser, registerUser, getUserInfo} = require('../controllers/userController')
const router = express.Router()

router.post('/login', loginUser)

router.post('/register', registerUser)

router.get('/user', updateUser)


module.exports = router