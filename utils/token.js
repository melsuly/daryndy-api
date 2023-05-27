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

module.exports = { generateToken }