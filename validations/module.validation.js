const validator = require('express-validator')
const body = validator.body

const create = [
    body('title').isLength({ min: 5 }),
    body('description').optional().isString(),
    body('lessons').optional().isArray()
]

module.exports = { create }