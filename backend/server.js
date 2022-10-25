const express = require('express')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const PORT = process.env.PORT || 3000
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/tutorials', require('./routes/tutorialRoutes'))

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server działa na porcie: ${PORT}`))