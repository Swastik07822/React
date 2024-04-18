require("dotenv").config();
const connectDB = require("./startup/db");
const { Blog } = require("./models/blog");

const BlogJson = require("./mock_data.json");

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URI);
        await Blog.deleteMany();
        await Blog.create(BlogJson);
        console.log("success");
    } catch (error) {
        console.log(error);
    }
};

start();
// this file is only for entering data into mongodb. don't run this again and again