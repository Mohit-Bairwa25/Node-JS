const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.get('/welcome', (req, res) => {
  res.send('Hello World!')
})

app.get('/category', (req, res) => {
    res.send('This Guy Know <br> Java <br> HTML <br> CSS <br> Javascript <br> Git & Github <br> Express.js <br> Node.js etc')
  })

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
    // res.send('This Website was Established in 2024')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})