const asyncHandler = require('express-async-handler')

const Tutorial = require('../models/tutorialModel')


// @desc Get tutorials
// @route GET /api/tutorials
const getTutorials = asyncHandler (async (req, res) => {
    const tutorials = await Tutorial.find()
   
    res.status(200).json(tutorials)
})

// @desc Set tutorials
// @route SET /api/tutorials
const setTutorials = asyncHandler (async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('please add a text field')
    }
    const tutorial = await Tutorial.create({text: req.body.text})
    res.status(200).json(tutorial)
})

// @desc update tutorial
// @route PUT /api/tutorials/:id
const updateTutorial = asyncHandler (async (req, res) => {
const tutorial = await Tutorial.findById(req.params.id)

    if(!tutorial){
        res.status(400)
        throw new Error('not found')
    }
    const updatedTutorial = await Tutorial.findByIdAndUpdate(req.params.id, req.body,{
        new: true,
    })

    res.status(200).json(updatedTutorial)
})


// @desc Delete tutorial
// @route DELETE /api/tutorial/:id
const deleteTutorial = asyncHandler (async (req, res) => {

    const tutorial = await Tutorial.findById(req.params.id)

    if(!tutorial){
        res.status(400)
        throw new Error('tutorial doesn`t exist')
    }
    tutorial.remove()
    res.status(200).json(tutorial.text)
})

module.exports = {getTutorials, setTutorials, updateTutorial, deleteTutorial}