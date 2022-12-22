//const express = require('express')
const app = require('./app')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db');
const colors = require('colors')
//const { errorHandler } = require('./middleware/errorMiddleware')
//const cors = require('cors')

const PORT = process.env.PORT || 5000
connectDB()

// const app = express()
// app.use(cors())

// app.use(express.json())
// app.use(express.urlencoded({extended: false}))

// app.use('/api/tutorials', require('./routes/tutorialRoutes'))
// app.use('/api/users', require('./routes/userRoutes'))
// app.use('/api/chapters', require('./routes/ChapterRoutes'))
// app.use('/api/assign', require('./routes/AssignRoutes'))

// app.use(errorHandler)
app.listen(PORT, () => console.log(`Server działa na porcie: ${PORT}`))