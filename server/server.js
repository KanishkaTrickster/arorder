const express = require('express');
const app = express();   
const path = require("path");
const server = require("http").Server(app);
const bodyParser = require("body-parser");
require("dotenv").config();

app.use(bodyParser.json());


server.listen(3000);
console.log('API is running on port 3000');