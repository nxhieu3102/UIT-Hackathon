const router=require('express').Router();
const userRouter = require('./UserRouter')
const postRouter = require('./PostRouter')
const coffeeRouter = require('./CoffeeRouter')
const partnerRouter = require('./PartnerRouter')


router.use('/user',userRouter);
router.use('/post',postRouter);
router.use('/coffee', coffeeRouter);
router.use('/partner', partnerRouter);



router.use((err, req, res, next) => {
    if (err) res.status(400).send(err)
})
router.use('/', (req, res, next) => {
    res.status(404).send({error:"Page not found"})
})



module.exports = router