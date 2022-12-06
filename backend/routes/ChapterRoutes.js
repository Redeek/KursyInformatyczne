const express = require('express')
const {setChapter, updateChapter, deleteChapter} = require('../controllers/chapterController')
const {protect} = require('../middleware/authMiddleware')
const router = express.Router()

router.post('/', protect, setChapter)
router.put('/:id', protect, updateChapter)
router.delete('/:id/:chapter',protect, deleteChapter)

module.exports = router