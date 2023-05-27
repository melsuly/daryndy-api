const express = require('express')

const app = express()
const port = 4444

// Enable JSON
app.use(express.json())

// Routes
app.use('/auth', require('./routes/auth.routes'))

// Start server and display errors & logs
app.listen(port, (err) => {
    if (err) {
        return console.warn(err)
    }

    console.log('Server is started at port', port)
})