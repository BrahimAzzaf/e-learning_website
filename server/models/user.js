const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: String,
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    image: {
        type: String, // Store the URL of the image in Firebase Storage
        default: 'default_profile_image_url' // Optional default image URL
    }
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
