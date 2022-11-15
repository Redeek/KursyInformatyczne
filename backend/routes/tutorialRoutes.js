const express = require('express')
const {getTutorials, setTutorials, updateTutorial, deleteTutorial} = require('../controllers/tutorialController')
const router = express.Router()

const {protect} = require('../middleware/authMiddleware')

router.get('/', getTutorials)

router.post('/', protect, setTutorials)

router.put('/:id', protect, updateTutorial)


router.delete('/:id',protect, deleteTutorial)

module.exports = router