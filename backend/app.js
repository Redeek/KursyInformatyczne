const express = require('express')
const { errorHandler } = require('./middleware/errorMiddleware')
const cors = require('cors')


const app = express()
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/tutorials', require('./routes/tutorialRoutes'))
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/chapters', require('./routes/ChapterRoutes'))
app.use('/api/assign', require('./routes/AssignRoutes'))

app.use(errorHandler)


module.exports = app