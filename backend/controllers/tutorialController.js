const asyncHandler = require('express-async-handler')

const getTutorials = asyncHandler (async (req, res) => {
   
    res.status(200).json({message: 'show tutorials'})
})

const setTutorials = asyncHandler (async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('please add a text field')
    }

    res.status(200).json({message: 'post tutorials'})
})

module.exports = {getTutorials, setTutorials}