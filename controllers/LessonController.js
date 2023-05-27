const validator = require('express-validator')
const LessonModel = require('../models/LessonModel')

const getAll = async (req, res) => {
    try {
        // Try to get all lessons from DB
        const lessons = await LessonModel.find()

        res.status(200).json(lessons)
    } catch (e) {
        // Return server error
        return res.status(500).json({
            error: 'Сервердегі қате!'
        })
    }
}

const getOne = async (req, res) => {
    try {
        // Try to get lesson by id from DB
        const lesson = await LessonModel.findById(req.params.id)

        res.status(200).json(lesson)
    } catch (e) {
        // Return not found error
        return res.status(404).json({
            error: 'Сабақ табылмады!'
        })
    }
}

const create = async (req, res) => {
    // Check for errors in credentials validation
    const e = validator.validationResult(req)

    // Return error if validation failed
    if (!e.isEmpty()) {
        return res.status(400).json({
            error: e.array()[0].msg
        })
    }

    // Creating new Lesson
    const doc = new LessonModel({
        title: req.body.title,
        contents: req.body.contents
    })

    try {
        // Try saving new lesson in DB
        const lesson = await doc.save()

        res.status(201).json(lesson)
    } catch (e) {
        // Return server error
        return res.status(500).json({
            error: 'Сервердегі қате!'
        })
    }
}

module.exports = { getAll, getOne, create }