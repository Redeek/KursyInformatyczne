const express = require('express')
const { assignTutorial, showAssignedTutorial, deleteAssignTutorial, updateProgress} = require('../controllers/AssignTutorialController')
const {protect} = require('../middleware/authMiddleware')
const router = express.Router()

router.get('/', protect, showAssignedTutorial)
router.post('/', protect, assignTutorial)
router.put('/:id', protect, assignTutorial)
router.delete('/:id',protect, deleteAssignTutorial)
router.put('/progress/:id', protect, updateProgress)

module.exports = router