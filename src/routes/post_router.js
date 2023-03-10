const router = require('express').Router(); 
const postController = require('../controller/post_controller'); 


router.post('/createPost', postController.createPost); //body: content, userId
router.get('/getAllPosts', postController.getAllPosts); 


module.exports = router;
