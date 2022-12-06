const express = require('express')
const router = express.Router()
const {loginUser, registerUser, getUserInfo} = require('../controllers/userController')
const  {protect} = require('../middleware/authMiddleware')

router.post('/login', loginUser)
router.post('/register', registerUser)
router.get('/user', protect, getUserInfo)


module.exports = router