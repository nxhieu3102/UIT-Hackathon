const mongoose = require('mongoose')

const PointsChema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },


    
});

module.exports = mongoose.model("Bill", PointsChema);