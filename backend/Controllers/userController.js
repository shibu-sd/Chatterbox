const express = require("express");
const UserModel = require("../models/userModel");
const expressAsyncHandler = require("express-async-handler");

const loginController = () => { };

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
});