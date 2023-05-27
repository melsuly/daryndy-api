const express = require('express')
const router = express.Router()
const controller = require('../controllers/LessonController')
const validation = require('../validations/lesson.validations')

const checkAuth = require('../middlewares/checkAuth')

router.use(checkAuth)

/*
    Get lessons

    GET: /
*/
router.get('/', controller.getAll)

/*
    Get lesson by id

    GET: /:id
*/
router.get('/:id', controller.getOne)

/*
    Create new lesson

    POST: /
*/
router.post('/', validation.create, controller.create)

module.exports = router