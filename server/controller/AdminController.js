const db = require('./DatabaseController.js');
db.connect(process.env.MONGODB_URI)

const mongoose = require('mongoose')
const User = require('../model/User.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

class AdminController {

    async creatNewPartner(req, res, next) {
        // Check cheater
        if (!req.body.username || !req.body.password || !req.body.address || !req.body.phone || !req.body.address2) {
            next({ message: "Invalid fields" })
            return;
        }
        let hashedPassword
        try {
            let saltRounds = 10;
            hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

        } catch (e) {
            console.log(e)
        }
        const newUser = new User({
            _id: new mongoose.Types.ObjectId(),
            user_name: req.body.username,
            password: hashedPassword,
            address2: req.body.address2,
            address: req.body.address,
            phone: req.body.phone,
        })
        try {
            await newUser.save();
        } catch (err) {
            next({
                success: false,
                message: "existed"
            });
            return;
        }
        res.send({
            success: true,
            message: "sucessfully",
            user: newUser
        });
    }
    async creatNewAccount(req, res, next) {
        // Check cheater
        if (!req.body.username || !req.body.password || !req.body.address || !req.body.phone || !req.body.address2) {
            next({ message: "Invalid fields" })
            return;
        }
        let hashedPassword
        try {
            let saltRounds = 10;
            hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

        } catch (e) {
            console.log(e)
        }
        const newUser = new User({
            _id: new mongoose.Types.ObjectId(),
            user_name: req.body.username,
            password: hashedPassword,
            address2: req.body.address2,
            address: req.body.address,
            phone: req.body.phone,
        })
        try {
            await newUser.save();
        } catch (err) {
            next({
                success: false,
                message: "existed"
            });
            return;
        }
        res.send({
            success: true,
            message: "sucessfully",
            user: newUser
        });
    }

}
module.exports = new UserController;