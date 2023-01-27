const router = require('express').Router();
const userController = require('../controller/user_controller');

router.post('/signUp', userController.signUp);  //body: username, password
router.post('/signIn', userController.signIn);  //body: username, password

module.exports = router; 