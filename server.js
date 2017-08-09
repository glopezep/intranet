const express = require('express')

const app = express()
const port = 3000 || process.env.PORT

app.use('/public', express.static(`${__dirname}/public`))
app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/projects', (req, res) => {
  res.render('index')
})

app.get('/login', (req, res) => {
  res.render('index')
})

app.listen(port, () => console.log(`Server listening on port ${port}`))
