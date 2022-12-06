const express = require('express')
const { assignTutorial, showAssignedTutorial, deleteAssignTutorial} = require('../controllers/AssignTutorialController')
const {protect} = require('../middleware/authMiddleware')
const router = express.Router()

router.get('/', protect, showAssignedTutorial)
router.post('/', protect, assignTutorial)
router.put('/:id', protect, assignTutorial)
router.delete('/:id',protect, deleteAssignTutorial)

module.exports = router