const { json } = require("body-parser");
const Bill = require("../model/Bill")
const Campaign = require("../model/Campaign");

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
            const currentCampaign = Campaign.findById(req.body.campaignId);
            

            
        } catch (error) {
            res.status(500).json({
                success: false,
                error: error
            })
        }

    }


    //viewMyBill

}

module.exports = ContributorController;