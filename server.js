const express = require('express')
const mongoose = require('mongoose')

const app = express()
const port = 4444
const mongodbURI = 'mongodb+srv://admin:AHLWvG1PiH6AugiU@daryndyv1.p076h8a.mongodb.net/v1?retryWrites=true&w=majority'

// Connect to DB
mongoose.connect(mongodbURI) 
    .then(() => console.log('MongoDB is connected successfully!'))
    .catch((e) => console.warn('Error in connecting to database', e))

// Enable JSON
app.use(express.json())

// Routes
app.use('/auth', require('./routes/auth.routes'))
app.use('/users', require('./routes/users.routes'))

// Start server and display errors & logs
app.listen(port, (e) => {
    if (e) {
        return console.warn('Error in starting server:', e)
    }

    console.log('Server is started at port', port)
})