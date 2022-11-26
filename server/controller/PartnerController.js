const Campaign = require("../model/Campaign");
const {BillStatusEnum} = require("../constants/Enum");
const Bill = require("../model/Bill")

const PartnerController = {

    //create campaign
    createCampaign: async(req, res) => {
        // const currentUserId = req.user.userId;
        // const title = req.body.title;
        // const desc = req.body.desc;
        // const begin = req.body.bigin;
        // const end = req.body.end;
        // const address = req.body.address;
        // const address2 = req.body.address2;
        // const status = req.body.status;
        // const bill_limit = req.body.bill_limit;
        try {
            let newCampaign = Campaign({...req.body, userId: req.user.userId});
            console.log(newCampaign)
            const saveCampaign = await newCampaign.save();
            res.status(200).json({
                success: true,
                campaign: saveCampaign
                })
        } catch (error) {
            res.status(500).json({
                success: false,
                error: error
            })
        }   
        
    },

    //view bills of campaign
    viewwCampaignBills: async (req, res) => {
        try {
            const campaignId = req.body.campaignId;
            const CampaignBills = await Bill.find({campaignId: campaignId}).all();
            res.status(200).json({
                success: true,
                bills: CampaignBills
            })
            
        } catch (error) {
            res.status(500).json({
                success: false,
                error: error
            })
        }
    },

    //accept BILL
    acceptBill: async(req, res) => {
        try {

            const billId = req.body.billId;
            const bill = await Bill.findOneAndUpdate(
                {_id: billId},
                {status: BillStatusEnum.success})
            
        } catch (error) {
            res.status(500).json({
                success: false,
                error: error
            })
        }
    },

    dennyBill: async(req, res) => {
        try {

            const billId = req.body.billId;
            const bill = await Bill.findOneAndUpdate(
                {_id: billId},
                {status: BillStatusEnum.fail})
            
        } catch (error) {
            res.status(500).json({
                success: false,
                error: error
            })
        }
    }




}

module.exports = PartnerController;