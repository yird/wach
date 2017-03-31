const User = require('../models/user')
var express = require('express')
var router = express.Router()

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
router.put('/addFavorite', function (req, res) {
  User.findByIdAndUpdate(req.session.userId,
    { '$addToSet': { mylist: req.body.id }},
    function (err, managerparent) {
      if (err) { console.log(error) }
    }
    )
})
router.put('/deleteFavorite', function (req, res) {
  User.update({_id: req.session.userId},
    { '$pull': { mylist: req.body.id } },
    { safe: true },
    function (err, managerparent) {
      if (err) { console.log(error) }
    }
    )
})

module.exports = router
