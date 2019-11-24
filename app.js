'use strict'

const express = require('express')
const app = express()

const config = require('./config/projectConfig')
const listernPort = config.appPort

const routers = require('./router/router')

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use('/api',routers)

app.listen(listernPort, ()=> console.log(`server listerning at port: ${listernPort}`))