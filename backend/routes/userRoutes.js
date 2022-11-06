const express = require('express')
const router = express.Router()
const {loginUser, registerUser, getUserInfo} = require('../controllers/userController')


router.post('/login', loginUser)

router.post('/register', registerUser)

router.get('/user', getUserInfo)


module.exports = router