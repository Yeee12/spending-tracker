const express = require('express')
const dbConnect = require("./config/dbConnect");
const app = express()

dbConnect();

module.exports =app;