const express = require('express')
const router = express.Router()
const controller = require('../controllers/CourseControlller')
const validation = require('../validations/course.validation')
const handleValidationErrors = require('../middlewares/handleValidationErrors')

const checkAuth = require('../middlewares/checkAuth')

router.use(checkAuth)

/*
    Get courses

    GET: /
*/
router.get('/', controller.getAll)

/*
    Get course by id

    GET: /:id
*/
router.get('/:id', controller.getOne)

/*
    Create new course

    POST: /
*/
router.post('/', validation.create, handleValidationErrors, controller.create)

/*
    Create new module for course

    POST: /:id/modules
*/
router.post('/:id/modules', validation.createModule, handleValidationErrors, controller.createModule)

module.exports = router