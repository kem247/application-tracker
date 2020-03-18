const responseRouter = require('express').Router()
const Response = require('../db/models/response')
const Form = require('../db/models/form')
// const Question = require('../db/models/question')
responseRouter.get('/', async (req, res, next) => {
  try {
    // console.log('res', req.params)
    const responses = await Response.findAll()
    res.json(responses)
  } catch (err) {
    next(err)
  }
})

responseRouter.post('/', async (req, res, next) => {
  try {
    let responseId = await req.params.id
    let questions = req.body.userResponse
    console.log('questions', questions)
    const form = await Form.findOne({
      where: {
        id: req.body.formId
      }
    })
    const {applicantResponse, email, status} = req.body
    console.log('reqBody', req.body)
    let response = await Response.create({
      id: responseId,
      applicantResponse: applicantResponse,
      email: email,
      status: status,
      formId: form.id
    })
    // const questionId = questions.forEach(async q => {
    //   await Question.create({
    //     questionId: q.questionId,
    //     response: q.response
    //     // response: response,
    //     // email: response.email,
    //     // status: response.status
    //   })
    // })
    // console.log(questionId)
    res.json(response)
  } catch (err) {
    next(err)
  }
})

module.exports = responseRouter
