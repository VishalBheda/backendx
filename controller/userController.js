'use strict'

const userModel = require('../models/userModel')

class UserController {
    constructor(){

    }

    async getAll(req, res){
       
        let responseObject = { response: false, message: 'notFound' }
        try {
            let isUsersFound = await userModel.find()
            if(isUsersFound) {
                responseObject.response = true
                responseObject.message = isUsersFound
            }
        } catch(err){
            console.log('Error in login check')
            console.log(err)
        }
        return res.send(responseObject)
    }

    async login(req, res){

        let email = req.body.email
        let password = req.body.password
       
        let responseObject = { response: false, message: 'notFound' }
        try {
            let isUserFound = await userModel.findOne({'email': email, 'password': password})
            if(isUserFound) {
                responseObject.response = true
                responseObject.message = isUserFound
            }
        } catch(err){
            console.log('Error in login check')
            console.log(err)
        }
        return res.send(responseObject)
    }
    
    async register(req, res){
        let userObject = {}
        
         userObject.username = req.body.username
         userObject.password = req.body.password
         userObject.email = req.body.email
       
        let responseObject = { response: false, message: 'Error in saving' }
        try {
            let isUserFound = await userModel.findOne({'email': userObject.email})
            if(isUserFound) {
                responseObject.response = false
                responseObject.message = 'email already found'
            } else {
                let newUser = new userModel(userObject)
                let isSave = await newUser.save()
                if(isSave) {
                    responseObject.response = true
                    responseObject.message = isSave
                }
            }
        } catch(err){
            console.log('Error in login check')
            console.log(err)
        }
        return res.send(responseObject)
    }

    async removeUser(req, res){

        let email = req.body.email
       
        let responseObject = { response: false, message: 'notFound' }
        try {
            let isUserFound = await userModel.deleteOne({'email': email})
            if(isUserFound) {
                responseObject.response = true
                responseObject.message = isUserFound
            }
        } catch(err){
            console.log('Error in login check')
            console.log(err)
        }
        return res.send(responseObject)
    }

    async modifyUser(req, res){

        let email = req.body.email
        let setObject = req.body.setObject
        
        let responseObject = { response: false, message: 'notFound' }
        try {
            let isUserFound = await userModel.update({'email': email}, {$set: setObject})
            if(isUserFound) {
                responseObject.response = true
                responseObject.message = isUserFound
            }
        } catch(err){
            console.log('Error in login check')
            console.log(err)
        }
        return res.send(responseObject)
    }

}

module.exports = new UserController()