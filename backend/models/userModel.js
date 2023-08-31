const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userModel = mongoose.Schema(
    {
        name: {
            type: String,
            requried: true,
        },
        email: {
            type: String,
            requried: true,
        },
        password: {
            type: String,
            requried: true,
        },
    },
    {
        timeStamp: true,
    }
);

const User = mongoose.model("User", userModel);
module.exports = User;