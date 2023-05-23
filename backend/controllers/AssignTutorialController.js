const asyncHandler = require('express-async-handler')

const Tutorial = require('../models/tutorialModel')
const User = require('../models/userModel')

//Show User's assigned tutorials
//route GET http://localhost:5000/api/assign
const showAssignedTutorial = asyncHandler( async(req,res) =>{
    const UserAssignedTutorial = await User.findById(req.user.id, {_id:0, assignTutorials:1})
    res.status(200).json(UserAssignedTutorial)
})


//Show User's assigned tutorial
//route GET http://localhost:5000/api/assign/:id
const AssignedTutorial = asyncHandler( async(req,res) =>{
    const user = req.user.id
     //const UserAssignedTutorial = await User.find({_id: req.user.id, "assignTutorials.tutorialId": {$in: req.params.id}})
    const UserAssignedTutorial = await User.findOne({user},{"assignTutorials":{"$elemMatch":{tutorialId: req.params.id}}})
    res.status(200).json(UserAssignedTutorial)
})


//assign tutorial to account
//route POST http://localhost:5000/api/assign
const assignTutorial = asyncHandler( async(req,res)=>{
    const tutorial = await Tutorial.findById(req.body.id)
    const assignTutorial = await User.findByIdAndUpdate(req.user.id,
        {$push: {'assignTutorials': {tutorialId: req.body.id, title: tutorial.title, description: tutorial.cardDescription, progress: 0, chapters: tutorial.chapterArray}}}, 
        {new:true})

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
                { $pull: {assignTutorials: {'_id': req.params.id}}},
                {new: true})
    res.status(200).json(deleteAssignedTutorial)

})

module.exports = {
    showAssignedTutorial,
    assignTutorial,
    deleteAssignTutorial,
    AssignedTutorial
}