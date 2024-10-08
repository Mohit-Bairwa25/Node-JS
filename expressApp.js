const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/home', (req, res) => {
  res.send('This is Home Page')
})
app.get('/about', (req, res) => {
  res.send('This is About')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})