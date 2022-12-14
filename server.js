const express = require('express')
const app = express()
const port = 3004
const path = require('path')

app.use('/congkhai', express.static(path.join(__dirname,'public')))

app.get('/', (req, res) => {
    var duongDanFile = path.join(__dirname,'home.html')

    res.sendFile(duongDanFile)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})