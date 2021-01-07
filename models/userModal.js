const mongoose = require('mongoose');

// Create Schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name"]
    },
    email: {
        type: String,
        required: [true, "Email ID"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password"]
    },
    role: {
        type: Number,
        default: 0 // 0 = user, 1 = admin
    },
    avatar: {
        type: String,
        default: "https://res.cloudinary.com/vk-demon/image/upload/v1610026432/avatar_kepfbx.png"
    }
},{
    timestamps: true
});

module.exports = mongoose.model('Users', userSchema);