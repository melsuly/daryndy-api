const express = require('express')
const router = express.Router()
const controller = require('../controllers/UserController')

const checkAuth = require('../middlewares/checkAuth')

router.use(checkAuth)

/*
    Get current user

    GET: /current
*/
router.get('/current', controller.getCurrentUser)

module.exports = router