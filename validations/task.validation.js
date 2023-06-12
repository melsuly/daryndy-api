const validator = require('express-validator')
const body = validator.body

const create = [
    body('category').isIn(['lecture', 'playground', 'quiz']),
]

module.exports = { create }
