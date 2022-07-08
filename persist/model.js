const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    fullname: {type: String, required: true},
    //Consider adding roles (potentially a boolean "Admin: {type: Boolean, required: true, default: false}")
    //Should be encrypted
    password: {type: String, required: true}
});

const User = mongoose.model("User", userSchema);

module.exports = User;