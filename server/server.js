const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const session = require('express-session')
const path = require('path')
const port = 8000
const app = express()
const authRouter = require('./routes/auth')
const apiRouter = require('./routes/api')
// mongodb connection
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/wachdb')

app.use(express.static(path.join(__dirname, '../dist')))
app.use(bodyParser.json())
app.use(session({
  secret: 'wach-c873-app-a4f8071f',
  resave: true,
  saveUninitialized: false
}))
app.use('/api', apiRouter)
app.use('/auth', authRouter)

app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, '../dist/index.html'))
})

app.listen(port)
console.log('Server started on port:' + port)
