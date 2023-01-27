const User = require('../models/user');

module.exports.signUp = async (req, res) => {
    try {
        let user = await User.findOne({ username: req.body.username });
        if (user) {
            console.log(`user already exists with username : ${req.body.username}`);
            return res.json({ success: false, message: "user already exists" });
        } 
        await User.create({ username: req.body.username, password: req.body.password });
        console.log(`new user created :${req.body.username}`);
        return res.json({ success: true, message: "Account Created. Now Login with the same Credentials" });
    } catch (error) {
        console.log(error);
        return res.json({ success: false, message: "Error Detected" });
    }
}