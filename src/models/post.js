const { Timestamp } = require('bson');
const mongoose = require('mongoose'); 

const postSchema = mongoose.Schema({
    content: {
        type: String, 
        required: true, 
        trim: true, 
    },
    user: {
        type: mongoose.Schema.Types.ObjectId, 
        ref:'user', 
    }, 

}, {
    timestamps:true
})

module.exports = mongoose.model('post', postSchema); 