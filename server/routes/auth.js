import express from 'express'
import User from '../models/user'
import jwt from 'jsonwebtoken'

let router = express.Router()

router.post('/login', (req, res, next) => {
  const token =
    jwt.sign({
      email: req.body.email,
      well: 'thisis other'
    }, 'verysecurekeyforjwt')
  res.json({token})
})

export default router

