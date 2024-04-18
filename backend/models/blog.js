const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    title: { type: String, required: true },
    subTitle: { type: String, required: true },
    blog: { type: String, required: true }
});

const Blog = mongoose.model("Blog", BlogSchema);

exports.Blog = Blog;