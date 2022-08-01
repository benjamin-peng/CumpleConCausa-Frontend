const User = require('../models/User');
var nodeoutlook = require('nodejs-nodemailer-outlook')

module.exports.register = async (req, res, next) => {
    const { charity, email, firstName, lastName, phone } = req.body;

    try {
        const user = await User.create({
            charity, email, firstName, lastName, phone
        });
        res.status(201).json({
            success: true,
            user
        });

        nodeoutlook.sendEmail({
            auth: {
                user: "cumpleconcausabot@outlook.com",
                pass: process.env.EMAIL_PASSWORD
            },
            from: 'cumpleconcausabot@outlook.com',
            to: email,
            subject: 'Cumple Con Causa Registration Confirmation',
            html: `<h3>Welcome to Cumple Con Causa, ${firstName} ${lastName}!</h3>
                    <p>A representative will contact you shortly.</p>`,
        });

        nodeoutlook.sendEmail({
            auth: {
                user: "cumpleconcausabot@outlook.com",
                pass: process.env.EMAIL_PASSWORD
            },
            from: 'cumpleconcausabot@outlook.com',
            to: 'ngoemail@gmail.com', //TODO:: include in post body
            subject: `${firstName} ${lastName} has registered for your NGO`,
            html: `<p>Please contact them at ${email}</p>`,
        });

        nodeoutlook.sendEmail({
            auth: {
                user: "cumpleconcausabot@outlook.com",
                pass: process.env.EMAIL_PASSWORD
            },
            from: 'cumpleconcausabot@outlook.com',
            to: process.env.CUMPLE_CON_CAUSA_EMAIL,
            subject: 'Cumple Con Causa Registration Confirmation',
            html: `<h3>Welcome to Cumple Con Causa, ${firstName} ${lastName}!</h3>
                    <p>A representative will contact you shortly.</p>`,
        });
        
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message
        });
    }
};
//TODO:: implement auth
/*
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
*/