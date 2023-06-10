const validator = require('express-validator')
const body = validator.body

const login = [
    body('email', 'Email қате толтырылды!').isEmail(),
    body('password', 'Құпиясөз қате толтырылды!').isLength({ min: 8 }),
]

const register = [
    body('name', 'Есіміңіз қате толтырылды!').isString().isLength({ min: 2 }),
    body('surname', 'Тегіңіз қате толтырылды!').isString().isLength({ min: 2 }),
    body('gender', 'Жыныс таңдалмады').isIn(['male', 'female']),
    body('email', 'Email қате толтырылды!').isEmail(),
    body('password', 'Құпиясөз кемінде 8 символдан тұруы қажет!').isLength({
        min: 8,
    }),
    body('role').optional().isIn(['student', 'teacher', 'admin']),
]

module.exports = { register, login }
