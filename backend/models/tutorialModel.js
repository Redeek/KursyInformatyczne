const mongoose = require(`mongoose`)

const tutorialSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    title:{
        type: String,
        required: [true, "This field is required"]
    },
    description:{
        type: String,
        required: [true, "This field is required"]
    },
    text:{
        type: String,
        required: [true, 'This field is required'],
    },
    
},
{
    timestamps: true
})

module.exports = mongoose.model('Tutorial', tutorialSchema)