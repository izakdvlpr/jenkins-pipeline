const express = require('express')

const app = express()

app.get('/', (_request, response) => {
  response.json({ message: 'Hello World' })
})

app.listen(3333, () => console.log('api online'))