const mongoose = require('mongoose')

const billSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    campaignId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Campaign"
    },

    rubbish: {
        categories: {type: [Number], default: []},
        quantity: {type: [Number], default: []}
    },

    status: {
        type: Boolean
    },
    
});

module.exports = mongoose.model("Bill", billSchema);