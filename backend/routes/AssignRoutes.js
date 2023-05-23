const express = require('express')
const { assignTutorial, showAssignedTutorial, deleteAssignTutorial, updateProgress,AssignedTutorial, setEndChapter, unsetEndChapter} = require('../controllers/AssignTutorialController')
const {protect} = require('../middleware/authMiddleware')
const router = express.Router()

router.get('/', protect, showAssignedTutorial)
router.get("/:id", protect, AssignedTutorial)
router.post('/', protect, assignTutorial)
router.put('/:id', protect, assignTutorial)
router.delete('/:id',protect, deleteAssignTutorial)

module.exports = router