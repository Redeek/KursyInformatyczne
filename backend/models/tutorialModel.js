const mongoose = require(`mongoose`)

const tutorialSchema = mongoose.Schema({
    text:{
        type: String,
        required: [true, 'This field is required'],
    },
    
},
{
    timestamps: true
})

module.exports = mongoose.model('Tutorial', tutorialSchema)