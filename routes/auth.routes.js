const express = require('express')
const router = express.Router()
const controller = require('../controllers/AuthController')

/*
    Authorise user by credentials

    POST: /login
    @param email
    @param password
*/
router.post('/login', controller.login)

module.exports = router