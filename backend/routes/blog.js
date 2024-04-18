const { Blog } = require('../models/blog');
const express = require('express');
const router = express.Router();
const _ = require('lodash');
const asyncErrorHandler = require("../middleware/asyncErrorHandler");

// Route for creating a blog
router.post("/create", asyncErrorHandler(async (req, res) => {
    try {
        const { title, subTitle, blog } = req.body;

        const newBlog = new Blog({
            title,
            subTitle,
            blog
        });
        await newBlog.save();

        res.json({ message: "Blog created successfully!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}));

// Route for fetching all blogs
router.get("/", asyncErrorHandler(async (req, res) => {
    try {
        const blogs = await Blog.find();
        // console.log(blogs);
        res.send(blogs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}));

// Route for fetching a single blog by ID
router.get("/:id", asyncErrorHandler(async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }
        res.json(blog);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}));

// Route for deleting a blog by ID
router.delete("/:id", asyncErrorHandler(async (req, res) => {
    try {
        const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
        if (!deletedBlog) return res.status(404).json({ message: "Blog not found" });

        res.json({ message: "Blog deleted successfully!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}));

module.exports = router;