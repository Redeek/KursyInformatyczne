const asyncHandler = require('express-async-handler')

const Tutorial = require('../models/tutorialModel')
const User = require('../models/userModel')


// desc Get all tutorials
// route GET /api/tutorials
const getTutorials = asyncHandler (async (req, res) => {
    const tutorials = await Tutorial.find({show: true},{updatedAt:0})
   
    res.status(200).json(tutorials)
})

// desc Get tutorial from id in params
// route GET /api/tutorials/:id
const getTutorial = asyncHandler( async(req, res) => {
    const tutorial = await Tutorial.findById(req.params.id)

    res.status(200).json(tutorial)
})

// desc create tutorial
// route POST /api/tutorial
const setTutorials = asyncHandler (async (req, res) => {

    // if(!req.body.title){
    //     res.status(400)
    //     throw new Error('please add a title field')
    // }
    // if(!req.body.longDescription){
    //     res.status(400)
    //     throw new Error('please add a description field')
    // }

    const tutorial = await Tutorial.create({
        user: req.user.id,
        title: req.body.title,
        cardDescription: req.body.cardDescription,
        longDescription: req.body.longDescription,
        language: req.body.language,
        isActive: false,
        chapterArray:[],
    })
    res.status(200).json(tutorial)
})

// desc update tutorial
// route PUT /api/tutorials/:id
const updateTutorial = asyncHandler (async (req, res) => {

    const tutorial = await Tutorial.findById(req.params.id)

    if(!tutorial){
        res.status(400)
        throw new Error('not found')
    }

    if(!req.user){
        res.status(401)
        throw new Error('user not found')
    }

    if(tutorial.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('Not authorized')
    }

    const updatedTutorial = await Tutorial.findByIdAndUpdate(req.params.id, req.body,{
        new: true,
    })

    res.status(200).json(updatedTutorial)
})


// desc Delete tutorial
// route DELETE /api/tutorial/:id
const deleteTutorial = asyncHandler (async (req, res) => {

    const tutorial = await Tutorial.findById(req.params.id)

    if(!tutorial){
        res.status(400)
        throw new Error('tutorial doesn`t exist')
    }

    if(!req.user){
        res.status(401)
        throw new Error('user not found')
    }

    if(tutorial.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('Not authorized')
    }

    
    tutorial.remove()
    res.status(200).json(tutorial.text)
})

// desc Get users tutorials
// route GET /api/tutorials/my_tutorials
const getUserTutorials = asyncHandler( async(req, res)=>{

    const userTutorials = await Tutorial.find({user: req.user.id })
   
    res.status(200).json(userTutorials)
})


module.exports = {getTutorials, setTutorials, updateTutorial, deleteTutorial, getUserTutorials, getTutorial}