const mongoose = require('mongoose')
const {BillStatusEnum, CategoriesRubbish, PointOfRubbish } = require('../constants/Enum')

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
        categories: {
            type: [{
                type: String,
                enum: Object.values(CategoriesRubbish),
            }], 
            default: []
        },
        quantities: [Number]
    },

    status: {
        type: Boolean,
        enum: Object.values(BillStatusEnum),
        default: BillStatusEnum.pending 
    },
    
});

module.exports = mongoose.model("Bill", billSchema);