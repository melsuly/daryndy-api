const express = require('express')
const router = express.Router()
const controller = require('../controllers/ModuleController')
const validation = require('../validations/module.validation')
const handleValidationErrors = require('../middlewares/handleValidationErrors')

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
router.post('/', validation.create, handleValidationErrors, controller.create)

router.post(
    '/:id/lessons',
    validation.createLesson,
    handleValidationErrors,
    controller.createLesson
)

module.exports = router
