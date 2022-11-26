const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const partner_queue = new Schema(
    {
        _id: mongoose.Types.ObjectId,
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            unique:true
        },
        status: {
            type:String,
            enum: ['approved', 'pending', 'disapproved'],
            default: 'pending' //approved = 1, pending = 0, disapproved = -1
        },
    },{timestamps: true}
);
module.exports = mongoose.model('PartnerQueue', partner_queue)