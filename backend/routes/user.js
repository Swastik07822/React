const { User } = require('../models/user');
const express = require('express');
const router = express.Router();
const _ = require('lodash');
const asyncErrorHandler = require("../middleware/asyncErrorHandler");
const bcrypt = require('bcrypt');

// Route for user signup
router.post("/signup", asyncErrorHandler(async (req, res) => {
    try {
        const { first_name, last_name, email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "Email already in use" });

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const newUser = new User({
            first_name,
            last_name,
            email,
            password: hashedPassword,
        });
        await newUser.save();

        res.json({ message: "User registered successfully!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}));

// Route for user signin
router.post("/signin", asyncErrorHandler(async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: "User not found" });

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) return res.status(401).json({ message: "Invalid credentials" });

        res.json({ message: "User signed in successfully!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}));

module.exports = router;