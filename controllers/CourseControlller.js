const CourseModel = require('../models/CourseModel')
const ModuleModel = require('../models/ModuleModel')

const getAll = async (req, res) => {
    try {
        // Try to get all courses from DB
        const courses = await CourseModel.find().populate('modules')

        res.status(200).json(courses)
    } catch (e) {
        // Return server error
        return res.status(500).json({
            error: 'Сервердегі қате!',
        })
    }
}

const getOne = async (req, res) => {
    try {
        // Try to get lesson by id from DB
        const course = await CourseModel.findById(req.params.id)
            .populate('teacher')
            .populate('modules')

        res.status(200).json(course)
    } catch (e) {
        // Return not found error
        return res.status(404).json({
            error: 'Курс табылмады!',
        })
    }
}

const create = async (req, res) => {
    // Creating new Course
    const doc = new CourseModel({
        title: req.body.title,
        description: req.body.description,
        modules: req.body.modules,
        teacher: req.userID,
    })

    try {
        // Try saving new course in DB
        const course = await doc.save()

        res.status(201).json(course)
    } catch (e) {
        // Return server error
        return res.status(500).json({
            error: 'Сервердегі қате!',
        })
    }
}

const createModule = async (req, res) => {
    // Creating new Module
    const doc = new ModuleModel({
        title: req.body.title,
        description: req.body.description,
        lessons: req.body.lessons,
    })

    try {
        // Try saving new module in DB
        const module = await doc.save()

        await CourseModel.updateOne(
            {
                _id: req.params.id,
            },
            {
                $push: { modules: module._doc._id },
            }
        )

        res.status(201).json(module)
    } catch (e) {
        // Return server error
        return res.status(500).json({
            error: 'Сервердегі қате!',
        })
    }
}

module.exports = { getAll, getOne, create, createModule }
