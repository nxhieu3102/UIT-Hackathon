const partnerController = require("../controller/PartnerController");
const router = require("express").Router();
const authMiddleware = require('../middleware/AuthMiddleware')




router.use(authMiddleware.isPartner)

//create
router.post("/", partnerController.createCampaign);

// //get all coffee
// router.get("/", coffeeController.getAllCoffee);
module.exports = router;