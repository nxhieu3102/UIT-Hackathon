const db = require('./DatabaseController.js');
db.connect(process.env.MONGODB_URI)

const mongoose = require('mongoose')
const User = require('../model/User.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

class UserController {

    async creatNewAccount(req, res, next) {
        // Check cheater
        if (!req.body.username || !req.body.password || !req.body.address || !req.body.avatar) {
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
            avatar: req.body.avatar,
            address: req.body.address,
        })
        try {
            await newUser.save();
        } catch (err) {
            next({ 
                success: false,
                message: "existed" });
            return;
        }
        res.send({ 
            success: true,
            message: "sucessfully",
            user: newUser 
        });
    }

    async verifyAccount(req, res, next) {

        if (!req.body.username || !req.body.password) {
            next({ mess: "Invalid account" })
            return;
        }
        const user = await User.findOne({ user_name: req.body.username })

        console.log(user);
        if (user) {
            try {
                let check = await bcrypt.compare(req.body.password, user.password)
                if (check) {
                    const token = jwt.sign({
                        user:{
                            username: user.user_name,
                            userId: user._id,
                            avatar: user.avatar,
                            address: user.address
                        },
                    },
                        process.env.SECRET_KEY_TOKEN,
                        {
                            expiresIn: "80h"
                        }
                    );
                    res.cookie('token', token, {
                        expires: new Date(Date.now() + 80 * 3600)
                    })
                    res.send({ message: "Sucessfully" })
                }
                else {
                    res.send({ message: "Wrong information" });
                    return;
                }
            } catch (err) {
                next(err);
                return;
            }
        }
        else {
            res.send({ message: "Wrong information" });
            return;
        }

       
    }
    

}
module.exports = new UserController;