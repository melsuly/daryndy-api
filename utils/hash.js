const bcrypt = require('bcrypt')

const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10)
    const passwordHash = await bcrypt.hash(password, salt)

    return passwordHash
}

const comparePassword = async (password, hash) => {
    const result = await bcrypt.compare(password, hash)

    return result
}

module.exports = { hashPassword, comparePassword }