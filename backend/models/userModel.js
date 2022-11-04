const mongoose =  require('mongoose')

const userSchema = mongoose.Schema({
    nickname:{
        type: String,
        required: [true, "nickname is required"]
    },
    name:{
        type: String,
        required: [true, "name is required"]
    },
    secondName:{
        type: String,
        required: [true, "secondName is required"]
    },
    email:{
        type: String,
        required: [true, "email is required"]
    },
    password:{
        type: String,
        required: [true, "password is required"]
    },
    

},{
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)