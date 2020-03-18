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
async function asyncForEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    await callback(array[i], i, array)
  }
}
formRouter.post('/', async (req, res, next) => {
  try {
    const {title} = req.body
    const questions = req.body.questions
    console.log('firstVal', questions[0].question)
    const newForm = await Form.create({
      title: title,
      questions: questions
    })
    console.log('req', req.body)
    const questionForm = await Question.create({
      formId: newForm.id,
      question: questions[0].question,
      type: questions[0].type,
      options: questions[0].option
    })
    console.log('qForm', questionForm)
    // asyncForEach(questions, async q => {
    // try {
    //   const questionForm = await Question.create({
    //     formId: newForm.id,
    //     question: q.question,
    //     type: q.type,
    //     options: q.option
    //   })
    //   console.log('qqqqq:', questionForm)
    // } catch (err) {
    //   console.log(err)
    // }
    // })

    res.json({status: 'success', uniqueId: newForm.id})
  } catch (err) {
    console.log('next error')
    next(err)
  }
})

module.exports = formRouter
//getId

//response route
//comments route
//questions route
