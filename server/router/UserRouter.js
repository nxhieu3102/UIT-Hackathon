const router=require('express').Router();
const UserController = require('../controller/UserController')
const AuthController = require('../controller/AuthController')

router.post('/signup',UserController.creatNewAccount);
router.post('/login',UserController.verifyAccount);
router.post('/auth/google',AuthController.verifyGoogleLogin);

module.exports = router