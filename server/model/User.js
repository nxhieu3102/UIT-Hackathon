const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const user = new Schema(
    {
        _id: mongoose.Types.ObjectId,
        user_name: {
            type: String,
            unique: true,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        avatar: {
            type: String,
            require: true
        },
        address: {
            type: String,
            require: true
        },

        // posts: [
        //     {
        //         type: mongoose.Schema.Types.ObjectId,
        //         ref: "Post"
        //     }
        // ],

        date: { type: Date, default: Date.now }
    }
);
module.exports = mongoose.model('User', user)