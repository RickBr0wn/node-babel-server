const dotenv = require('dotenv').config()
const cors = require('cors')
const express = require('express')

const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`)
)
