const { MongoDBNamespace } = require('mongodb');
const mongoose = require('mongoose')

const campaignSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },

    desc: {
        type: String
    },
    
    begin: {
        type: Date,
        default: Date.now()
    },

    end: {
        type: Date,
        default: Date.now()
    },

    address: {
        type: String,
        required: true
    },

    address2: {
        type: String,
        required: true
    },


    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },


    bill_limit:{
        type: Number,
        required: true
    },
     
    status: {
        type: Boolean,
        default: true
    },

    bills_access_number: {
        type: Number,
        default: 0
    },

    bills_collected_number: {
        type: Number,
        default: 0
    }

    
}, {timestamps: true});

module.exports = mongoose.model("Campaign", campaignSchema);