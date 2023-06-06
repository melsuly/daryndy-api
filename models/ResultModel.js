const mongoose = require('mongoose')

const ResultSchema = new mongoose.Schema({
    taskID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task'
    },
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    result: {
        score: Number,
        answer: String
    }
}, { timestamps: true })

module.exports = mongoose.model('Result', ResultSchema)