const mongoose =  require('mongoose')

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, "name is required"]
    },
    surname:{
        type: String,
        required: [true, "surname is required"]
    },
    email:{
        type: String,
        required: [true, "email is required"]
    },
    password:{
        type: String,
        required: [true, "password is required"]
    },
    assignTutorials:[{
        tutorialId:{ type: mongoose.Schema.Types.ObjectId, ref:"Tutorial"},
        title: {type: String, reqired: true},
        description: {type: String, required: true},
        progress: {type: Number},
        chapters: []
    }]
    

},{
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)