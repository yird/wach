const User = require('../models/user')
var express = require('express')
var router = express.Router()

router.get('/getUserMovies', function (req, res) {
  if (req.session.userId) {
    User.findById(req.session.userId)
      .exec(function (error, user) {
        if (error) { console.log(error) }
        var userMovies = {
          mylist: user.mylist,
          loved: user.loved,
          watched: user.watched
        }
        res.send(userMovies)
      })
  } else {
    res.status(404).send(false)
  }
})

router.get('/getFavorites', function (req, res) {
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
router.put('/addMovie', function (req, res) {
  var data = {}
  data[req.body.type] = req.body.id
  User.findByIdAndUpdate(req.session.userId,
    {'$addToSet': data},
    function (error, managerparent) {
      if (error) { console.log(error) }
    }
    )
})
router.put('/deleteMovie', function (req, res) {
  var data = {}
  data[req.body.type] = req.body.id
  User.update({_id: req.session.userId},
    { '$pull': data },
    { safe: true },
    function (error, managerparent) {
      if (error) { console.log(error) }
    }
    )
})

module.exports = router
