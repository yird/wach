import express from 'express'
import User from '../models/user'

let router = express.Router()

router.post('/login', (req, res, next) => {
  res.status(200).send(req.body)
})

export default router

