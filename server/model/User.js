const mongoose = require('mongoose');
const { UserRoleEnum } = require('../constants/Enum')
const Schema = mongoose.Schema;
const user = new Schema(
    {
        _id: mongoose.Types.ObjectId,
        email: {
            type: String,
            unique: true,
        },
        
        password: {
            type: String,
            required: true
        },

        role: {
            type: Number,
            enum: Object.values(UserRoleEnum),
            default: UserRoleEnum.contributor 
        },

        date: { type: Date, default: Date.now }
    }
);
module.exports = mongoose.model('User', user)