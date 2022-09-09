const express = require('express')
const api = require('./server_modules/api')

const app = express()
const port = process.env.PORT || 3000


app.get('/', async (req, res) => {
  res.sendFile(__dirname + '/website/index.html')
})

app.get('/map', async (req, res) => {
  res.sendFile(__dirname + '/website/map.html')
})

app.get('/api', async (req, res) => {
  let apiResponse = await api(req)
  res.send(apiResponse)
})

app.listen(port, async () => {
  console.log(`App listening at http://localhost:${port}`)
})