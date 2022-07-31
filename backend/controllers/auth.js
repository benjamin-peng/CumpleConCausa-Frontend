const User = require('../models/User');

module.exports.register = async (req, res, next) => {
    const { username, firstName, lastName, email, password } = req.body;

    try {
        const user = await User.create({
            username, firstName, lastName, email, password
        });
        res.status(201).json({
            success: true,
            user
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message
        });
    }
};

module.exports.login = (req, res, next) => {
    const { email, password } = req.body();
    if (!email || !password) {
        res.status(400).json({ success: false, error: "please provide email and password" });
    }

    try {
        const user = await User.findOne({ email }.select('+password'));

        if (!user) {
            res.status(404).json({ success: false, error: 'invalid credentials' });
        }

        const isMatch = await user.matchPasswords(password);

    } catch (error) {
        
    }
};

UserSchema.methods.matchPasswords = async function(password) {
    return await bcrypt.compare(password, this.password);
};

module.exports.forgotPassword = (req, res, next) => {
    res.send('forgot password route');
};

module.exports.resetPassword = (req, res, next) => {
    res.send('reset password route');
};