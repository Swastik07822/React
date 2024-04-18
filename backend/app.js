const express = require("express");
const app = express();
require("dotenv").config();

require('./startup/routes')(app);
require('./startup/db')();

const port = process.env.PORT || 5000;
const server = app.listen(port, () => console.log(`${port} , I'm connected`))

module.exports = server;