const User = require('../models/user');
const bcrypt = require('bcrypt');

module.exports.signUp = async (req, res) => {
    try {
        let user = await User.findOne({ username: req.body.username });
        if (user) {
            console.log(`user already exists with username : ${req.body.username}`);
            return res.json({ success: false, message: "user already exists" });
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        await User.create({ username: req.body.username, password: hashedPassword });
        console.log(`new user created :${req.body.username}`);
        return res.json({ success: true, message: "Account Created. Now Login with the same Credentials" });
    } catch (error) {
        console.log(error);
        return res.json({ success: false, message: "Error Detected" });
    }
}

module.exports.signIn = async (req, res) => {
    try {
        let user = await User.findOne({ username: req.body.username });
        if (!user) {
            console.log(`user does not exist :${req.body.username}`);
            return res.json({ success: false, message: "user does not exist" })
        }
        if (!await bcrypt.compare(req.body.password, user.password)) {
            console.log(`Incorrect Password :${req.body.username}`);
            return res.json({ success: false, message: "Incorrect Password" });
        }
        console.log(`successfully logged in :${user.username}`);
        return res.json({ success: true, message: "successfully logged in" }); 
    } catch (error) {
        console.log(error);
        return res.json({ success: false, message: "Error Detected" }); 
    }
}