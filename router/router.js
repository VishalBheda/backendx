'use strict'

const express = require('express')
let router = express.Router()

const userController = require('../controller/userController')

router.get('/ping', (req, res)=>{
    res.send("pong!")
})

router.post('/login', userController.login)

router.post('/register', userController.register)

router.post('/remove', userController.removeUser)

router.post('/modify', userController.modifyUser)

router.get('/getall', userController.getAll)

module.exports = router