const formRouter = require('express').Router()
const Form = require('../db/models/form')
// const Form = require('..db/models/form')
const Question = require('../db/models/question')

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
    let form = await Form.findByPk(formId)
    res.json(form)
  } catch (err) {
    next(err)
  }
})

formRouter.post('/', async (req, res, next) => {
  try {
    const {title} = req.body
    let questions = req.body.questions
    const newForm = await Form.create({
      title: title,
      questions: questions
    })

    const questionId = questions.forEach(async q => {
      await Question.create({
        // formId: newForm.id,
        question: q.questions,
        type: q.type,
        options: q.options
      })
    })
    //questionId is undefined
    console.log('questionId', questionId)
    res.json({status: 'success', uniqueId: newForm.id})
  } catch (err) {
    next(err)
  }
})

module.exports = formRouter
//getId

//response route
//comments route
//questions route
