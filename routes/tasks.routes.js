const express = require('express')
const router = express.Router()
const controller = require('../controllers/TaskController')
const validation = require('../validations/task.validation')
const handleValidationErrors = require('../middlewares/handleValidationErrors')

const checkAuth = require('../middlewares/checkAuth')

router.use(checkAuth)

/*
    Get task by id

    GET: /:id
*/
router.get('/:id', controller.getOne)

/*
    Create new task

    POST: /
*/
router.post('/', validation.create, handleValidationErrors, controller.create)

module.exports = router