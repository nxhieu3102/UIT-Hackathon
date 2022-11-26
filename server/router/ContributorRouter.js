const router=require('express').Router();
const ContributorController = require('../controller/ContributorController')
const authMiddleware = require('../middleware/AuthMiddleware')




router.use(authMiddleware.isContributor)

router.post('/add-newpart',ContributorController.requestPartnerRole);
router.post('/new-bill', ContributorController.createBill);
router.get('/my-bills', ContributorController.viewMyBill);

module.exports = router