const mongoose = require("mongoose")


// Schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    age: {
        type: Number,
    },
    jobTitle: {
        type: String,
    },
})


// model
const User = mongoose.model('user', userSchema);


module.exports = User;