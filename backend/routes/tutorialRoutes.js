const express = require('express')
const {getTutorials, setTutorials, updateTutorial, deleteTutorial} = require('../controllers/tutorialController')
const router = express.Router()

router.get('/', getTutorials)

router.post('/', setTutorials)

router.put('/:id', updateTutorial)


router.delete('/:id', deleteTutorial)

module.exports = router