const responseRouter = require('express').Router()
const {Response} = require('../db/models/response')

responseRouter.get('/', async (req, res, next) => {
  try {
    const responses = await Response.findAll()
    res.json(responses)
  } catch (err) {
    next(err)
  }
})

responseRouter.post('/response', async (req, res, next) => {
  try {
    let id = req.body.id
    const response = await Response.create({
      status: 'success',
      uniqueId: id
    })
    res.json(response)
  } catch (err) {
    next(err)
  }
})

module.exports = responseRouter
