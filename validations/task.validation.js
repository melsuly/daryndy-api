const validator = require('express-validator')
const body = validator.body

const create = [
    body('taskType').isIn(['lecture', 'playground', 'quiz']),
    body('content').isString()
]

module.exports = { create }