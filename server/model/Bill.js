const mongoose = require('mongoose')
const { BillStatusEnum } = require('../constants/Enum')
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
        quantities: {type: [Number], default: []}
    },

    status: {
        type: Boolean,
        enum: Object.values(BillStatusEnum),
        default: BillStatusEnum.contributor 
    },
    
});

module.exports = mongoose.model("Bill", billSchema);