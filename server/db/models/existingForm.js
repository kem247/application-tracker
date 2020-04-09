const Sequelize = require('sequelize')
const db = require('../db')

const ExistingForm = db.define('existingForm', {
  sessionId: Sequelize.STRING
})

module.exports = ExistingForm
