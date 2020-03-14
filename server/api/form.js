const formRouter = require('express').Router()
const {Form, Question} = require('../db')
// const Form = require('..db/models/form')
// const Question = require('../db/models/question')

formRouter.get('/', async (req, res, next) => {
  try {
    const form = await Form.findAll()

    res.json(form)
  } catch (err) {
    next(err)
  }
})

formRouter.get('/:id', async (req, res, next) => {
  try {
    let formId = await req.params.id
    let form = Form.findByPk({
      where: {
        id: formId
      }
    })
    res.json(form)
  } catch (err) {
    next(err)
  }
})

formRouter.post('/createform', async (req, res, next) => {
  try {
    const {title} = req.body
    let questions = req.body.question
    const newForm = await Form.create({
      title: title,
      question: questions
    })

    const questionId = questions.forEach(async q => {
      await Question.create({
        formId: newForm.id,
        question: q.questions,
        type: q.type,
        options: q.options
      })
    })
    // const questions = await Question.findByPk(req.body.id)
    res.json({status: 'success', id: questionId.formId})
  } catch (err) {
    next(err)
  }
})

module.exports = formRouter
//getId

//response route
//comments route
//questions route
