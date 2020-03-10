const {Response, Question} = require('../db/models')

router.get('/', async (req, res, next) => {
  try {
    const responses = await Response.findAll()
    res.json(responses)
  } catch (err) {
    next(err)
  }
})

router.post('/response', async (req, res, next) => {
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
