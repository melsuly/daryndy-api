const validator = require('express-validator')
const UserModel = require('../models/UserModel')
const hash = require('../utils/hash')
const generateToken = require('../utils/token').generateToken

/*
    Login user by credentials
*/
const login = async (req, res) => {
    try {
        // Try to find user in DB
        const user = await UserModel.findOne({ email: req.body.email })

        // Return error if not found
        if (!user) {
            return res.status(404).json({
                error: 'Қолданушы табылмады!'
            })
        }

        // Compare passwords
        const isValidPass = await hash.comparePassword(req.body.password, user._doc.passwordHash)

        // Return error if credentials is invalid
        if (!isValidPass) {
            return res.status(400).json({
                error: 'Email немесе құпиясөз қате!'
            })
        }

        // Omit passwordHash from user data
        const { passwordHash, ...userData } = user._doc

        // Generate token for new account
        const token = generateToken({ 
            _id: user._id
        })

        // Return credentials of new account
        res.status(200).json({
            ...userData,
            token
        })
    } catch (e) {
        console.warn(e)
    }
}

/*
    Register user by credentials
*/
const register = async (req, res) => {
    // Hashing password
    const hashedPassword = await hash.hashPassword(req.body.password)

    // Creating account
    const doc = new UserModel({
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        passwordHash: hashedPassword,
        role: req.body.role
    })

    // Saving new account to DB
    try {
        const user = await doc.save()

        // Omit passwordHash from user data
        const { passwordHash, ...userData } = user._doc

        // Generate token for new account
        const token = generateToken({ 
            _id: user._id
        })

        // Return credentials of new account
        res.status(201).json({
            ...userData,
            token
        })
    } catch (e) {
        // Recognize error code
        if (e.code == 11000) {
            res.status(400).json({
                error: 'Бұл email тіркелген!'
            })
        } else {
            res.status(500).json({
                error: 'Сервердегі қате!'
            })
        }
    }
}

module.exports = { login, register }