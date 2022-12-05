const asyncHandler = require('express-async-handler')

const Tutorial = require('../models/tutorialModel')
const User = require('../models/userModel')

//desc Add chapter
//route Post /api/tutorials/chapter/:id
const setChapter = asyncHandler( async(req,res) =>{
    if(!req.user){
        res.status(401)
        throw new Error('user not found')
    }
    
    const tutorial = await Tutorial.findById(req.body.id)

    if(!tutorial){
        res.status(400)
        throw new Error('tutorial doesn`t exist')
    }

    if(tutorial.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('Not authorized')
    }

    const AddChapter = await Tutorial.findByIdAndUpdate(req.body.id,
                                    {$push: {'chapterArray': {titleChapter: req.body.title, textChapter: req.body.text}}} )

    res.status(200).json(`dodano: ${req.body.title}`)
})

//desc Update chapter
//route PUT /api/tutorials/chapter/:id
const updateChapter = asyncHandler( async(req,res) => {
    if(!req.user){
        res.status(401)
        throw new Error('user not found')
    }
    const tutorial = await Tutorial.findById(req.params.id)

    if(!tutorial){
        res.status(400)
        throw new Error('tutorial doesn`t exist')
    }

    if(tutorial.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('Not authorized')
    }

    const updateChapter = await Tutorial.findByIdAndUpdate(req.params.id,
                                        { $set: {[`chapterArray.${req.body.id}`] : {titleChapter: req.body.title, textChapter: req.body.text}}},
                                        { new: true }
                                         )

    res.status(200).json(updateChapter)

})


//desc delete chapter
//route DELETE /api/tutorials/chapter/:id/:chapter
const deleteChapter = asyncHandler( async(req,res)=>{
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

    
    const deleteChapter = await Tutorial.findByIdAndUpdate( req.params.id,
                                        { $pull: {chapterArray: {'_id': req.params.chapter}}},
                                        {new: true})
    res.status(200).json(deleteChapter)

})


module.exports = {setChapter, updateChapter, deleteChapter}