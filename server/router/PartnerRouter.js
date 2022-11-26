const partnerController = require("../controller/PartnerController");
const router = require("express").Router();
const authMiddleware = require('../middleware/AuthMiddleware')




router.use(authMiddleware.isPartner)

//create
router.post("/", partnerController.createCampaign);
router.put('/view-campaign-bills', partnerController.viewwCampaignBills);
router.put('accept-bill', partnerController.acceptBill);
router.put('deny-bill', partnerController.dennyBill);


// //get all coffee
// router.get("/", coffeeController.getAllCoffee);
module.exports = router;