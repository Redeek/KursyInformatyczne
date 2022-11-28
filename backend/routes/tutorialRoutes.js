const express = require('express')
const {getTutorials, setTutorials, updateTutorial, deleteTutorial, getMyTutorials} = require('../controllers/tutorialController')
const {setChapter, updateChapter, deleteChapter} = require('../controllers/chapterController')
const router = express.Router()

const {protect} = require('../middleware/authMiddleware')

router.get('/', getTutorials)
router.get('/my_tutorials',protect, getMyTutorials)
router.post('/', protect, setTutorials)
router.put('/:id', protect, updateTutorial)
router.delete('/:id',protect, deleteTutorial)

router.post('/chapter', protect, setChapter)
router.put('/chapter/:id', protect, updateChapter)
router.delete('/chapter/:id/:chapter',protect, deleteChapter)

module.exports = router