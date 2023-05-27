const verifyToken = require('../utils/token').verifyToken

const checkAuth = (req, res, next) => {
    const token = (req.headers.authorization || '').replace(/Bearer\s?/, '')
    
    if (token) {
        try {
            const credentials = verifyToken(token)

            req.userID = credentials._id
            
            return next()
        } catch (e) {}
    }
    
    res.status(403).json({
        error: 'Рұқсат жоқ!'
    })
}

module.exports = checkAuth