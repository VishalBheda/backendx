'use strict';

const mongoose = require('mongoose');
mongoose.Promise = global.Promise

const dbConnection = require('../dbConnection/dbConnector')()

const userSchema = require('../dbConnection/schemas/userSchema')

const userModel = dbConnection.model("user", userSchema)

module.exports = userModel