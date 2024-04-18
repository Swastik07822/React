const express = require("express");
const user = require("../routes/user");
const blog = require("../routes/blog");
const cors = require('cors');

module.exports = function (app) {
    app.use(express.json());
    app.use(cors());
    app.use('/api/user', user);
    app.use('/api/blog', blog);
}