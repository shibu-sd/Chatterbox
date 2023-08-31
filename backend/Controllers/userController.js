const UserModel = require("../models/userModel");
const expressAsyncHandler = require("express-async-handler");
const generateToken = require("../Config/generateToken");

const loginController = expressAsyncHandler(async (req, res) => {
    console.log(req.body);
    const { name, password } = req.body;

    const user = await UserModel.findOne({ name });

    console.log("Fetched user data", user);
    console.log(await user.matchPassword(password));

    if (user && (await user.matchPassword(password))) {
        const response = {
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        };
        console.log(response);
        res.json(response);
    } 
    else {
        res.status(401);
        throw new Error("Invalid Username or Password");
    }
});

const registerController = expressAsyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        res.send(400);
        throw Error("Please enter all the fields correctly.");
    }

    const userExist = await UserModel.findOne({ email });
    if (userExist) {
        throw Error("User already exists");
    }

    const userNameExist = await UserModel.findOne({ name });
    if (userNameExist) {
        throw Error("Username already taken");
    }

    const user = await UserModel.create({ name, email, password });
    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        });
    }
    else {
        res.status(400);
        throw new Error("Registration Error");
    }
});

module.exports = { loginController, registerController };