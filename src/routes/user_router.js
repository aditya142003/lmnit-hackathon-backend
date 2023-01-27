const router = require('express').Router();
const userController = require('../controller/user_controller');

router.post('/signUp', userController.signUp); 

module.exports = router; 