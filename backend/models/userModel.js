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
    AddedTutorials:[{
        tutorialId:{ type: mongoose.Schema.Types.ObjectId, ref:"Tutorial"},
        progress: {type: Number}
    }]
    

},{
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)