const Coffee = require("../model/Campaign");
const Campaign = require("../model/Campaign")

const CampaignController = {

    //create campaign
    createCampaign: async(req, res) => {
        const userRole = res.user.role;
        if(userRole === "partner")
        {
            // const currentUserId = req.user.userId;
            // const title = req.body.title;
            // const desc = req.body.desc;
            // const begin = req.body.bigin;
            // const end = req.body.end;
            // const address = req.body.address;
            // const address2 = req.body.address2;
            // const status = req.body.status;
            // const bill_limit = req.body.bill_limit;
            const newCampaign = req.body;
            newCampaign = {...newCampaign, userId: req.user.userId};
            try {
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
        else
        {
            res.status(500).json({
                success: false,
                message: "You are not a parter!"
            });
        }
    },


}

module.exports = CampaignController;