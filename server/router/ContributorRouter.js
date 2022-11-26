const router=require('express').Router();
const ContributorController = require('../controller/ContributorController')
const authMiddleware = require('../middleware/AuthMiddleware')




router.use(authMiddleware.isContributor)

router.post('/become-partner',ContributorController.requestPartnerRole);

module.exports = router