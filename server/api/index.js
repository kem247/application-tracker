const router = require('express').Router()

router.use('/users', require('./users'))
router.use('/comments', require('./comments'))
router.use('/form', require('./form'))
router.use('/response', require('./response'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

module.exports = router
