const responseRouter = require('express').Router()
const {Response} = require('../db/models/response')

responseRouter.get('/', async (req, res, next) => {
  try {
    const responses = await Response.findAll()
    res.json(responses)
    console.log('res', responses)
  } catch (err) {
    next(err)
  }
})

responseRouter.post('/', async (req, res, next) => {
  try {
    let responseId = await req.params.id
    let questions = req.body.questions
    let response = Response.findByPk({
      where: {
        id: responseId
      }
    })

    const createResponse = await Response.create({
      questionId: questions.id,
      response: response,
      email: response.email,
      status: response.status
    })

    res.json(createResponse)
  } catch (err) {
    next(err)
  }
})

module.exports = responseRouter
