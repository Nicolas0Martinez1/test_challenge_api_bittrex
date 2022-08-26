const express = require('express')
const app = express()
const port = 3000
const { BittrexClient } = require('./bittrexConfig'); 

app.get('/', (req, res) => {
    
      
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
