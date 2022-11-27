const express = require('express')
const app = express()
const process = require('process')
const { useApi } = require('./src/useApi')

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.listen(PORT, () => {
})
