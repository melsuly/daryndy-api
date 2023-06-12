const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema(
    {
        category: {
            type: String,
            required: true,
        },
        content: {
            type: Array,
            required: true,
        },
    },
    { timestamps: true }
)

module.exports = mongoose.model('Task', TaskSchema)
