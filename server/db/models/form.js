const Sequelize = require('sequelize')
const db = require('../db')

const Form = db.define('form', {
  title: {
    type: Sequelize.STRING
  }
})

module.exports = Form
