const express = require('express')
const router = express.Router()
const controller = require('../controllers/AuthController')
const validation = require('../validations/auth.validations')
const handleValidationErrors = require('../middlewares/handleValidationErrors')

/*
    Authorise user by credentials

    POST: /login
    @param email
    @param password
*/
router.post('/login', validation.login, handleValidationErrors, controller.login)

/*
    Register user by credentials

    POST: /register
    @param name
    @param email
    @param password
*/
router.post('/register', validation.register, handleValidationErrors, controller.register)

module.exports = router