const mongoose = require('mongoose')

const ModuleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    lessons: {
        type: [{ 
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Lesson'
        }],
        default: []
    }
}, { timestamps: true })

module.exports = mongoose.model('Module', ModuleSchema)