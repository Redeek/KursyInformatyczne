const express = require('express')
const {getTutorials, setTutorials} = require('../controllers/tutorialController')
const router = express.Router()

router.get('/', getTutorials)

router.post('/', setTutorials)

router.delete('/:id', (req, res) => {
    res.status(200).json({message: `delete tutorials ${req.params.id}`})
})

module.exports = router