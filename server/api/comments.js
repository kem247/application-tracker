const {Comments} = require('../db/models')

router.get('/', async (req, res, next) => {
  try {
    let comments = await Comments.findAll()
    res.json(comments)
  } catch (err) {
    next(err)
  }
})

//get all the comments associated with the response id
