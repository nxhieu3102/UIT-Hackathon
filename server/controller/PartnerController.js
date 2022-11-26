const Campaign = require("../model/Campaign")

const CampaignController = {

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
            console.log("test")
            const newCampaign = Campaign(req.body);
            newCampaign = {...newCampaign, userId: req.user.userId};
            console.log(newCampaign);
            const saveCampaign = await newCampaign.save();
            res.json(200).json({
                success: true,
                    campaign: saveCampaign
                })
        } catch (error) {
            res.status(500).json({
                success: false,
                error: error
            })
        }   
        
    }


}

module.exports = CampaignController;