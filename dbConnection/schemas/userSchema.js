'use strict'

const mongoose = require('mongoose');
mongoose.Promise = global.Promise

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
}, {timestamps: true, strict: false}) 

module.exports = userSchema