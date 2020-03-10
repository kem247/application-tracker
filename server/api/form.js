const {Form, Questions} = require('..db/models')

router.get('/', async (req, res, next) => {
  try {
    const form = await Form.findAll()

    res.json(form)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
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

router.post('/form', async (req, res, next) => {
  try {
    const {title} = req.body

    const newForm = await Form.create({
      title: title
    })
    const questions = await Questions.findByPk(req.body.id)
    res.json(newForm, questions)
  } catch (err) {
    next(err)
  }
})
//getId

//response route
//comments route
//questions route
