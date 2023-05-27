const express = require('express')
const router = express.Router()
const controller = require('../controllers/AuthController')
const validation = require('../validations/auth.validations')

/*
    Authorise user by credentials

    POST: /login
    @param email
    @param password
*/
router.post('/login', validation.login, controller.login)

/*
    Register user by credentials

    POST: /register
    @param name
    @param email
    @param password
*/
router.post('/register', validation.register, controller.register)

module.exports = router