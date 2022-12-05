const express = require('express')
const {getTutorials, setTutorials, updateTutorial, deleteTutorial, getUserTutorials, getTutorial} = require('../controllers/tutorialController')
const {setChapter, updateChapter, deleteChapter} = require('../controllers/chapterController')
const router = express.Router()

const {protect} = require('../middleware/authMiddleware')

router.get('/', getTutorials)
router.get('/:id', getTutorial)
router.get('/my_tutorials',protect, getUserTutorials)
router.post('/', protect, setTutorials)
router.put('/:id', protect, updateTutorial)
router.delete('/:id',protect, deleteTutorial)

router.post('/chapter', protect, setChapter)
router.put('/chapter/:id', protect, updateChapter)
router.delete('/chapter/:id/:chapter',protect, deleteChapter)

module.exports = router