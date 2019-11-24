'use strict';

const dbConnection = require('../dbConnection/dbConnector')()

const userSchema = require('../dbConnection/schemas/userSchema')

const userModel = dbConnection.model("user", userSchema)

module.exports = userModel