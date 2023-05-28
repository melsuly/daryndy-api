const mongoose = require('mongoose')

const CourseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    modules: {
        type: [{ 
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Module'
        }],
        default: []
    }
}, { timestamps: true })

module.exports = mongoose.model('Course', CourseSchema)