const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRoutes = require("./Routes/userRoutes");

const app = express();
dotenv.config();

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB");
    }
    catch (err) {
        console.log(err);
    }
};

connectDB();

app.get("/", (req, res) => {
    res.send("Hi");
});

app.use("user/", userRoutes);

const PORT = process.env.PORT;
app.listen(PORT, console.log("Server is Running"));