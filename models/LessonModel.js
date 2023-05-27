const mongoose = require('mongoose')

const LessonSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    contents: {
        type: [{ 
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Task'
        }],
        default: []
    }
}, { timestamps: true })

module.exports = mongoose.model('Lesson', LessonSchema)