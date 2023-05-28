const validator = require('express-validator')

const handleValidationErrors = (req, res, next) => {
    // Check for errors in credentials validation
    const e = validator.validationResult(req)

    // Return error if validation failed
    if (!e.isEmpty()) {
        return res.status(400).json({
            error: e.array()[0].msg
        })
    }

    next()
}

module.exports = handleValidationErrors