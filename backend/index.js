const express = require('express')
const app = express()
const port = 5002
const mongoose = require ("mongoose")
const mongodb = require("./db.js")
mongodb();


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})