const mongoose = require('mongoose')
const User = require('../model/User.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

class UserController {

    async creatNewAccount(req, res, next) {
        // Check cheater
        if (!req.body.username || !req.body.password || !req.body.address || !req.body.phone || !req.body.address2) {
            next({
                invalidFields: true,
                message: "Invalid fields"
            })
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
                message: "existed",
                existed: true
            });
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
            next({
                success: false,
                message: "Invalid fields",
                invalidFields : true
            })
            return;
        }
        const user = await User.findOne({ user_name: req.body.username })

        console.log(user);
        if (user) {
            try {
                let check = await bcrypt.compare(req.body.password, user.password)
                if (check) {
                    const token = jwt.sign({
                        user: {
                            username: user.user_name,
                            userId: user._id,
                            address2: user.address2,
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
                    res.send({
                        success: true,
                        message: "sucessfully"
                    })
                }
                else {
                    res.send({
                        success: false,
                        message: "wrong information",
                        wrongInformation: true,
                    });
                    return;
                }
            } catch (err) {
                next(err);
                return;
            }
        }
        else {
            res.send({ success: false, message: "Wrong information" });
            return;
        }
    }


}
module.exports = new UserController;