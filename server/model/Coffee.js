const mongoose = require('mongoose')

const coffeeSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },

    avatar: {
        type: String,
        default: ""
    },

    address: {
        type: String,
    }
    
});

module.exports = mongoose.model("Coffee", coffeeSchema);