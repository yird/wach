
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const session = require('express-session')

const path = require('path')
const port = 8000
var User = require('./models/user')
const app = express()

// mongodb connection
mongoose.connect('mongodb://localhost:27017/wachdb')
app.use(express.static(path.join(__dirname, '../dist')))
app.use(bodyParser.json())
app.use(session({
  secret: 'wach-c873-app-a4f8071f',
  resave: true,
  saveUninitialized: false
}))

app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname, '../dist/index.html'))
})
app.get('/mylist', function (req, res) {
  res.sendFile(path.resolve(__dirname, '../dist/index.html'))
})

app.get('/api/getFavorites', function (req, res) {
  if (req.session.userId) {
    User.findById(req.session.userId)
    .exec(function (error, user) {
      if (error) { console.log(error) }
      res.send(user.mylist)
    })
  } else {
    res.status(404).send(false)
  }
})
app.put('/api/addFavorite', function (req, res) {
  User.findByIdAndUpdate(req.session.userId,
    { '$addToSet': { mylist: req.body.id }},
    function (err, managerparent) {
      if (err) { console.log(error) }
    }
    )
})
app.put('/api/deleteFavorite', function (req, res) {
  User.update({_id: req.session.userId},
    { '$pull': { mylist: req.body.id } },
    { safe: true },
    function (err, managerparent) {
      if (err) { console.log(error) }
    }
    )
})

app.post('/api/getuser', function (req, res) {
  if (req.session.userId) {
    User.findById(req.session.userId)
    .exec(function (error, user) {
      var userInfo = {
        name: user.name,
        email: user.email,
        mylist: user.mylist
      }
      res.send(userInfo)
    })
  } else {
    res.send(false)
  }
})

// logout
app.post('/api/logout', function (req, res) {
  req.session.destroy()
})

// login
app.post('/api/login', function (req, res) {
  if (req.body.email && req.body.password) {
    User.authenticate(req.body.email, req.body.password, function (error, user) {
      if (error || !user) {
        res.status(404)
                .send('Not Found')
      } else {
        req.session.userId = user._id
        res.status(200)
                .send('Log')
      }
    })
  } else { // something was left empty
    return 0
  }
})

app.post('/api/islogged', function (req, res) {
  if (req.session.userId) {
    res.send(true)
  } else {
    res.send(false)
  }
})

// signup
app.post('/api/signup', function (req, res) {
  if (req.body.name &&
        req.body.email &&
        req.body.password &&
        req.body.confirmPassword
       ) {
    if (req.body.password !== req.body.confirmPassword) {
      res.send('passwords did not match')
    } else { // everything is confirmed
      var userData = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      }
                 // insert new users data into database.
      User.create(userData, function (error, user) {
        if (error) {
          console.log(error)
          res.send(false)
        } else {
          req.session.userId = user._id
          res.status(200)
                        .send('Log')
        }
      })
    }
  } else { // something was left empty
    console.log('error 2')
    return 0
  }
})

app.listen(port)
console.log('Server started on port:' + port)
