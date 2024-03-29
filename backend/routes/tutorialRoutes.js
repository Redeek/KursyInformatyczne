const express = require('express')
const {getTutorials, setTutorials, updateTutorial, deleteTutorial, getUserTutorials, getTutorial, setActive} = require('../controllers/tutorialController')

const router = express.Router()
const {protect} = require('../middleware/authMiddleware')

router.get('/', getTutorials)
router.get('/usertutorial', protect, getUserTutorials)
router.get('/:id', getTutorial)
router.post('/', protect, setTutorials)
router.put('/:id', protect, updateTutorial)
router.put('/active/:id', protect, setActive)
router.delete('/:id',protect, deleteTutorial)


module.exports = router