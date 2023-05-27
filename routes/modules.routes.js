const express = require('express')
const router = express.Router()
const controller = require('../controllers/ModuleController')
const validation = require('../validations/module.validation')

const checkAuth = require('../middlewares/checkAuth')

router.use(checkAuth)

/*
    Get modules

    GET: /
*/
router.get('/', controller.getAll)

/*
    Get module by id

    GET: /:id
*/
router.get('/:id', controller.getOne)

/*
    Create new module

    POST: /
*/
router.post('/', validation.create, controller.create)

module.exports = router