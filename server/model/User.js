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
            required: true
        },

        address: {
            type: String,
            required: true
        },

        address2: {
            type: String,
            required: true
        },

        phone: {
            type: String,
            required: true
        },

        role: {
            type: String,
            enum: ['contributor', 'partner', 'admin'],
            default: 'contributor' //contributor = 0, partner = 1, admin = 2
        },


        date: { type: Date, default: Date.now }
    }
);
module.exports = mongoose.model('User', user)