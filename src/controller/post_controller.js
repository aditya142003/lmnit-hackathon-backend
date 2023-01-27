const Post = require('../models/post');
const User = require('../models/user');

module.exports.createPost = async (req, res) => {
    try {
        let post = await Post.create({
            content: req.body.content,
            user: req.body.userId,
        });
        let user = await User.findById(req.body.userId);
        console.log(`new post posted by :${user.username}`);
        return res.json({ success: true, message: "Post created Successfully" });
    } catch (error) {
        console.log(error);
        return res.json({ success: false, message: "Error Detected" });
    }
} 


