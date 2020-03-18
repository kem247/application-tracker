const Sequelize = require('sequelize')
const db = require('../db')

const Question = db.define('question', {
  question: {
    type: Sequelize.STRING
  },
  type: {
    type: Sequelize.STRING
  },
  options: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    allowNull: true
  }
})

module.exports = Question
