const mongoose = require('mongoose')
const User = require('../model/User.js');
const PartnerQueue = require('../model/PartnerQueue');
const {PartnerQueueStatusEnum} = require('../constants/Enum')
class AdminController {

    async addNewPartner(req, res, next) {
        // Check cheater
        console.log(req.user)
        const userId = req.user.id;
        const newPartner = PartnerQueue.findOne({ user: mongoose.Types.ObjectId(userId) })
        if (!newPartner || newPartner.status == PartnerQueueStatusEnum.approved) {
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
                { $set: { "role": 'partner' } }
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
                { $set: { "role": 'contributor' } }
            ).exec();
        } catch (err) {
            console.log(err)
            res.status(400).json(err)
            return;
        }
    }

}
module.exports = new AdminController;