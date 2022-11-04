const express = require('express')
const {getUser, setUser, updateUser, deleteUser} = require('../controllers/userController')
const router = express.Router()

router.get('/', getUser)

router.post('/', setUser)

router.put('/:id', updateUser)


router.delete('/:id', deleteUser)

module.exports = router