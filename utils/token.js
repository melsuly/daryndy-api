const jwt = require('jsonwebtoken')

const secretKey = 'JzaRrcPNWRg64MCLkqM8IIW0CeN3nQfZ'

/*
    Generates JSON token based on app secret key

    @param credentials string|object
*/
const generateToken = (credentials) => {
    const token = jwt.sign(credentials, secretKey)

    return token
}

/*
    Verify token and decode by secret key
*/
const verifyToken = (token) => {
    const credentials = jwt.verify(token, secretKey)

    return credentials
}

module.exports = { generateToken, verifyToken }