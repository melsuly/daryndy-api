const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 9999
const mongodbURI = process.env.MONGODB_URI || 'mongodb+srv://admin:AHLWvG1PiH6AugiU@daryndyv1.p076h8a.mongodb.net/v1?retryWrites=true&w=majority'

// Connect to DB
mongoose.connect(mongodbURI) 
    .then(() => console.log('MongoDB is connected successfully!'))
    .catch((e) => console.warn('Error in connecting to database', e))

// Enable JSON
app.use(express.json())
// Fix CORS
app.use(cors())

// Routes
app.use('/auth', require('./routes/auth.routes'))
app.use('/users', require('./routes/users.routes'))
app.use('/tasks', require('./routes/tasks.routes'))
app.use('/lessons', require('./routes/lessons.routes'))
app.use('/modules', require('./routes/modules.routes'))
app.use('/courses', require('./routes/courses.routes'))

// Start server and display errors & logs
app.listen(port, (e) => {
    if (e) {
        return console.warn('Error in starting server:', e)
    }

    console.log('Server is started at port', port)
})