const { MongoDBNamespace } = require('mongodb');
const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },

    image: {
        type: String
    },
    
    content: {
        type:String,
        require: true
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],

    coffee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Coffee",
    },

    accessUser: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],

    acceptedUser: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],

    
}, {timestamps: true});

module.exports = mongoose.model("Post", postSchema);