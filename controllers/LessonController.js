const handleValidationErrors = require('../middlewares/handleValidationErrors')
const LessonModel = require('../models/LessonModel')
const TaskModel = require('../models/TaskModel')

const getAll = async (req, res) => {
    try {
        // Try to get all lessons from DB
        const lessons = await LessonModel.find()

        res.status(200).json(lessons)
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
        const lesson = await LessonModel.findById(req.params.id).populate(
            'contents'
        )

        res.status(200).json(lesson)
    } catch (e) {
        // Return not found error
        return res.status(404).json({
            error: 'Сабақ табылмады!',
        })
    }
}

const create = async (req, res) => {
    // Creating new Lesson
    const doc = new LessonModel({
        title: req.body.title,
        contents: req.body.contents,
    })

    try {
        // Try saving new lesson in DB
        const lesson = await doc.save()

        res.status(201).json(lesson)
    } catch (e) {
        // Return server error
        return res.status(500).json({
            error: 'Сервердегі қате!',
        })
    }
}

const createTask = async (req, res) => {
    // Creating new Module
    const doc = new TaskModel({
        category: req.body.category,
        content: req.body.content,
    })

    try {
        // Try saving new module in DB
        const task = await doc.save()

        await LessonModel.updateOne(
            {
                _id: req.params.id,
            },
            {
                $push: { contents: task._doc._id },
            }
        )

        res.status(201).json(task)
    } catch (e) {
        // Return server error
        return res.status(500).json({
            error: 'Сервердегі қате!',
        })
    }
}

module.exports = { getAll, getOne, create, createTask }
