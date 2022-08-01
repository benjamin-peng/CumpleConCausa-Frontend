const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    charity: {
        type: String,
        required: [true, 'charity required']
    },
    email: {
        type: String,
        required: [true, 'email required']
    },
    firstName: {
        type: String,
        required: [true, 'first name required']
    },
    lastName: {
        type: String,
        required: [true, 'last name required']
    },
    phone: {
        type: String,
        required: [true, 'phone number required']
    }
    /*
    password: {
        type: String,
        required: [true, 'password required'],
        minlength: 6,
        select: false //don't send back password unless explicitly queried
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date
    */
})

UserSchema.pre('save', async function(next) { //hooks into before save method
    if (!this.isModified('password')) {
        next();
    } else {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;