const express = require('express')
const app = express()
const process = require('process')

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/health-check', (req, res) => {
  res.send('ok')
})

app.listen(PORT, () => {
})
