const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    password:{
        type: String,
        minlength: 5
    },
    lastname:{
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp:{
        type: Number
    }
})

//schema를 model이 감싸주어야 함
const User = mongoose.model('User',userSchema)

//module을 쓸 수 있게 exports해줌
module.exports = { User }