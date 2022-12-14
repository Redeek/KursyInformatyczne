const asyncHandler = require('express-async-handler')

const Tutorial = require('../models/tutorialModel')
const User = require('../models/userModel')

//Show User's assigned tutorials
//route GET http://localhost:5000/api/assign
const showAssignedTutorial = asyncHandler( async(req,res) =>{
    const UserAssignedTutorial = await User.findById(req.user.id, {_id:0, assignTutorials:1})
    res.status(200).json(UserAssignedTutorial)
})

//assign tutorial to account
//route POST http://localhost:5000/api/assign
const assignTutorial = asyncHandler( async(req,res)=>{
    const tutorial = await Tutorial.findById(req.body.id)
    const assignTutorial = await User.findByIdAndUpdate(req.user.id,
        {$push: {'assignTutorials': {tutorialId: req.body.id, title: tutorial.title, description: tutorial.cardDescription, progress: 0}}}, 
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
                                        { $set: {[`assignTutorials.${req.body.id}`] : {progress: req.body.progress}}},
                                        { new: true }
                                         )

    res.status(200).json(updateProgress)
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

//desc Update progress
//route PUT /api/assign/progress/:id
const updateProgress = asyncHandler( async(req,res) => {
    if(!req.user){
        res.status(401)
        throw new Error('user not found')
    }

    const tutorial = await Tutorial.findById(req.params.id)

    if(!tutorial){
        res.status(400)
        throw new Error('tutorial doesn`t exist')
    }

    // const actualProgress = await User.findById(req.user.id, {assignTutorials: {$elemMatch: {id}} }, { _id:0, progress:1}).lean()
    // console.log(actualProgress.assignTutorials[0].progress)

    const actualUsersProgress = await User.find({user: req.user.id},{"assignTutorials.tutorialId": req.params.id})
    
    //.elemMatch("assignTutorials", {tutorialId: req.params.id}).lean()
            
    console.log(actualUsersProgress)
    const actualProgress = actualProgress.assignTutorials[req.body.id]

    const countChapter = tutorial.chapterArray.length
   
    const progressInChapter = 1/countChapter*100

    //const addProgress = actualProgress + progressInChapter
    //console.log(addProgress)

    const updateProgress = await User.findByIdAndUpdate(req.user.id,
                                     { $set: {[`assignTutorials.${req.body.id}.progress`] :  addProgress}}, 
                                     {new: true})
    
    res.status(200).json("updateProgress")

})


module.exports = {
    showAssignedTutorial,
    assignTutorial,
    deleteAssignTutorial,
    updateProgress
}