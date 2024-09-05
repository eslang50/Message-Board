import {Router} from 'express'
/* eslint-disable */

const messageRouter = new Router()

export const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }
];

messageRouter.get('/', (req, res) => {
  res.send(messages)
})


export default messageRouter

