const User = require('../models/user')
var express = require('express')
var router = express.Router()

router.post('/getuser', function (req, res) {
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
router.post('/logout', function (req, res) {
  req.session.destroy()
})

// login
router.post('/login', function (req, res) {
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

router.post('/islogged', function (req, res) {
  if (req.session.userId) {
    res.send(true)
  } else {
    res.send(false)
  }
})

// signup
router.post('/signup', function (req, res) {
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
module.exports = router
