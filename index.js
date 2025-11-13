require('dotenv').config()
const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get(`/login`,(req,res) => {
    res.send("brahmansh@91")
})

app.get(`/youtube`,(req,res) => {
    res.send('<h1> YOUNG ANSH </h1>')
})

//get is a type of rrequest given through express here.

app.listen(port, () => {
  console.log(`anshu backend ${port}`)
})

//express listen the request that sended. 