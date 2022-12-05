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
    cardDescription:{
        type: String,
        required: [true, "This field is required"]
    },
    longDescription:{
        type: String,
        required: [true,"this field is required"]
    },
    chapterArray:[{
        titleChapter: {
            type: String,
        },
        textChapter: {
        type: String
    }}],
    language: {
        type: String,
        required: [true, "this field is required"]
    },
    isActive: {
        type: Boolean,
        required: [true, "this field is required"]
    }
    
},
{
    timestamps: true
})

module.exports = mongoose.model('Tutorial', tutorialSchema)