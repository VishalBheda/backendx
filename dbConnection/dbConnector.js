'use strict'

const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const config = require('../config/projectConfig')
const dbUrl = config.dbConnectionURL

function dbConnector () {

    let dbOption = { useNewUrlParser: true, useUnifiedTopology: true } //for remove deprication warning
  
    var connection = mongoose.createConnection(dbUrl, dbOption);
   
    connection.on('connected', function () {
        console.log('Mongoose connected ' + dbUrl)
    })

    connection.on('error', function (err) {
        console.log('Mongoose connection error: ' + err);
        process.exit(1)
    });

    connection.on('disconnected', function () {
        console.log('Mongoose connection disconnected');
    });

    return connection
}


module.exports = dbConnector