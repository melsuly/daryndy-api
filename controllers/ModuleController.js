const validator = require('express-validator')
const ModuleModel = require('../models/ModuleModel')

const getAll = async (req, res) => {
    try {
        // Try to get all modules from DB
        const modules = await ModuleModel.find()

        res.status(200).json(modules)
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
        const module = await ModuleModel.findById(req.params.id).populate('lessons')

        res.status(200).json(module)
    } catch (e) {
        // Return not found error
        return res.status(404).json({
            error: 'Бөлім табылмады!'
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

    // Creating new Module
    const doc = new ModuleModel({
        title: req.body.title,
        description: req.body.description,
        lessons: req.body.lessons
    })

    try {
        // Try saving new lesson in DB
        const module = await doc.save()

        res.status(201).json(module)
    } catch (e) {
        // Return server error
        return res.status(500).json({
            error: 'Сервердегі қате!'
        })
    }
}

module.exports = { getAll, getOne, create }