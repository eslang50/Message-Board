import {Router} from 'express'
import { messages } from './getMessage.js';
/* eslint-disable */

const newMessageRouter = new Router()

newMessageRouter.post('/new', (req, res) => {
  const message = req.body.message
  const name = req.body.name
  messages.push({text : message, user : name, added : new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })})
  res.redirect("http://localhost:5173")}
)


export default newMessageRouter

