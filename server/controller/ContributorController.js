const { json } = require("body-parser");
const Bill = require("../model/Bill")
const Campaign = require("../model/Campaign");
const PartnerQueue = require('../model/PartnerQueue');
const { UserRoleEnum } = require('../constants/Enum')
const ContributorController = {

    //viewALLCampaign
    viewAllCampaign: async (req, res) => {
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
    },

    //createBill
    createBill: async (req, res) => {
        try {
            const bill = Bill(req.body);
            const saveBill = await bill.save();
            const currentCampaign = Campaign

        } catch (error) {
            res.status(500).json({
                success: false,
                error: error
            })
        }

    },
    requestPartnerRole: async (req, res, next) => {
        if (req.user.role == UserRoleEnum.contributor) {
            const newPartnerQueue = new PartnerQueue({
                user: new mongoose.Types.ObjectId(req.user.id)
            })
            newPartnerQueue.save();
        }
    }

    //viewMyBill
}

module.exports = ContributorController;