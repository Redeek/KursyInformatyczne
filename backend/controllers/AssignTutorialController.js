const asyncHandler = require('express-async-handler')

const Tutorial = require('../models/tutorialModel')
const User = require('../models/userModel')

//Show User's assigned tutorials
//route GET http://localhost:5000/api/assign
const showAssignedTutorial = asyncHandler( async(req,res) =>{
    const UserAssignedTutorial = await User.findById(req.user.id, {_id:0, AddedTutorials:1})
    res.status(200).json(UserAssignedTutorial)
})

//assign tutorial to account
//route POST http://localhost:5000/api/assign
const assignTutorial = asyncHandler( async(req,res)=>{
    const tutorial = await Tutorial.findById(req.body.id)
    const assignTutorial = await User.findByIdAndUpdate(req.user.id,
        {$push: {'AddedTutorials': {tutorialId: req.body.id, title: tutorial.title, progress: 0}}}, 
        {new:true})

    res.status(200).json(assignTutorial)
})

//desc edit progress in assigned tutorial
//route PUT /api/assign/:TutorialId
const editProgress = asyncHandler( async(req,res) =>{

    if(!req.user){
        res.status(401)
        throw new Error('user not found')
    }

    const updateProgress = await User.findByIdAndUpdate(req.user.id,
                                        { $set: {[`AddedTutorials.${req.body.id}`] : {progress: req.body.progress}}},
                                        { new: true }
                                         )

    res.status(200).json(assignTutorial)
})

//desc delete assign tutorial
//route DELETE /api/assign/:TutorialId
const deleteAssignTutorial = asyncHandler( async(req,res)=>{
    
    if(!req.user){
        res.status(401)
        throw new Error('user not found')
    }

    const deleteAssignedTutorial = await User.findByIdAndUpdate( req.user.id,
                { $pull: {AddedTutorials: {'_id': req.params.id}}},
                {new: true})
    res.status(200).json(deleteAssignedTutorial)

})


module.exports = {
    showAssignedTutorial,
    assignTutorial,
    deleteAssignTutorial
}