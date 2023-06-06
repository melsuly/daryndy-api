const validator = require('express-validator')
const body = validator.body

const create = [
    body('taskType').isIn(['lecture', 'playground', 'quiz']),
]

module.exports = { create }
