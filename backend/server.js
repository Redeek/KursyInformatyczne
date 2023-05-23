//const express = require('express')
const app = require('./app')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db');
const colors = require('colors')


const PORT = process.env.PORT || 5000
connectDB()

app.listen(PORT, () => console.log(`Server działa na porcie: ${PORT}`))

