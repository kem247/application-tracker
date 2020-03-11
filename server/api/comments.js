const {Comments} = require('../db/models')
const router = require('express').Router()
router.get('/', async (req, res, next) => {
  try {
    let comments = await Comments.findAll()
    res.json(comments)
  } catch (err) {
    next(err)
  }
})

//get all the comments associated with the response id

module.exports = router
