const router = require('express').Router();
const userController = require('../controller/user_controller');

router.post('/signUp', userController.signUp);
router.post('/signIn', userController.signIn);

module.exports = router; 