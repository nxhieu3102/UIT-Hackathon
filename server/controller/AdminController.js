const mongoose = require('mongoose')
const User = require('../model/User.js');
const PartnerQueue = require('../model/PartnerQueue');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

class AdminController {

    async creatNewPartner(req, res, next) {
        // Check cheater
        const userId = req.user.id;
        const newPartner = PartnerQueue.findOne({ user: mongoose.Types.ObjectId(userId) })
        if (!newPartner || newPartner.status == 1) {
            res.status(401)
            res.json({
                message: 'Invalid user to change into partner',
                inValid: true,
                success: false
            })
            return;
        }
        newPartner.status = 1;
        newPartner.save();
        res.status(200)
        res.json({
            message: 'Sucessfully',
            success: true
        })

        // udpate role in user table
        try {
            await User.findOneAndUpdate(
               { _id: mongoose.Types.ObjectId(userId) },
               { $set: { "role": 1} }
           ).exec();
       } catch (err) {
           console.log(err)
           res.status(400).json(err)
       }

    }
    async deletePartner(req, res, next) {
       // udpate role in user table
       try {
        await User.findOneAndUpdate(
           { _id: mongoose.Types.ObjectId(req.user.id) },
           { $set: { "role": 0} }
       ).exec();
   } catch (err) {
       console.log(err)
       res.status(400).json(err)
       return;
   }
    }

}
module.exports = new UserController;