const UserModel = require('../models/UserModel')

const getCurrentUser = async (req, res) => {
    try {
        // Try to find user by ID
        const user = await UserModel.findById(req.userID)

        // Return error if not found
        if (!user) {
            return res.status(404).json({
                error: 'Қолданушы табылмады!'
            })
        }

        // Omit passwordHash from user data
        const { passwordHash, ...userData } = user._doc

        // Return credentials of new account
        res.status(200).json(userData)
    } catch (e) {
        // Return server error
        return res.status(500).json({
            error: 'Сервердегі қате!'
        })
    }
}

module.exports = { getCurrentUser }