const validator = require('express-validator')
const TaskModel = require('../models/TaskModel')

const getOne = async (req, res) => {
    try {
        // Try to get lesson by id from DB
        const task = await TaskModel.findById(req.params.id)

        res.status(200).json(task)
    } catch (e) {
        // Return not found error
        return res.status(404).json({
            error: 'Тапсырма табылмады!'
        })
    }
}

const create = async (req, res) => {
    // Creating new Lesson
    const doc = new TaskModel({
        taskType: req.body.taskType,
        content: req.body.content
    })

    try {
        // Try saving new lesson in DB
        const task = await doc.save()

        res.status(201).json(task)
    } catch (e) {
        // Return server error
        return res.status(500).json({
            error: 'Сервердегі қате!'
        })
    }
}

module.exports = { getOne, create }