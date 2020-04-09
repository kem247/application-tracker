const Sequelize = require('sequelize')
const db = require('../db')

const existingForm = db.define('existingForm', {
  sessionId: Sequelize.STRING
})

module.exports = existingForm
