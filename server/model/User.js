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

        name: {
            type: String,
            require: true
        },

        address: {
            type: String,
            require: true
        },

        address2: {
            type: String,
            require: true
        },

        phone: {
            type: String,
            require: true
        },

        rolle: {
            type: mongoose.Schema.Types.Integer,
        },


        date: { type: Date, default: Date.now }
    }
);
module.exports = mongoose.model('User', user)