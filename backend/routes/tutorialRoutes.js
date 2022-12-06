const express = require('express')
const {getTutorials, setTutorials, updateTutorial, deleteTutorial, getUserTutorials, getTutorial} = require('../controllers/tutorialController')

const router = express.Router()
const {protect} = require('../middleware/authMiddleware')

router.get('/', getTutorials)
router.get('/:id', getTutorial)
router.get('/my_tutorials',protect, getUserTutorials)
router.post('/', protect, setTutorials)
router.put('/:id', protect, updateTutorial)
router.delete('/:id',protect, deleteTutorial)

module.exports = router