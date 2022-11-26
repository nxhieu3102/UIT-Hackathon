const CampaignController = require("../controller/CampaignController");
const router = require("express").Router();


//create
router.post("/", CampaignController.createCampaign);

// //get all coffee
// router.get("/", coffeeController.getAllCoffee);
module.exports = router;