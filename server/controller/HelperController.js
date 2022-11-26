const mongoose = require('mongoose')
const User = require('../model/User.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Campaign = require("../model/Campaign");
class UserController {

        //viewALLCampaign
        async viewAllCampaign(req, res, next) {
            try {
                const campaigns = await Campaign.find();
                res.status(200).json(
                    {
                        success: true,
                        campaigns: campaigns
                    }
                )
            } catch (error) {
                res.status(500).json({
                    success: false,
                    error: error
                })
            }
        }

}
module.exports = new UserController;