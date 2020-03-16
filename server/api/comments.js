const commentRouter = require('express').Router()
const {Comment} = require('../db/models/comment')

commentRouter.get('/', async (req, res, next) => {
  try {
    let comments = await Comment.findAll()
    console.log('comments', comments)
    res.json(comments)
  } catch (err) {
    next(err)
  }
})

module.exports = commentRouter
//get all the comments associated with the response id
