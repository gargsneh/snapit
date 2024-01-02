const express = require('express')
const app = express()
const port = 5002
const { AbortController: AbortControllerPolyfill } = require('abort-controller');
global.AbortController = AbortControllerPolyfill;

const mongoose = require ("mongoose")
const {connectToDatabase } = require("./db.js");

connectToDatabase()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})