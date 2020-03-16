const Sequelize = require('sequelize')
const db = require('../db')

const Response = db.define('response', {
  applicantResponse: {
    type: Sequelize.STRING,
    get: function() {
      return JSON.parse(this.getDataValue('applicantResponse'))
    },
    set: function(val) {
      return this.setDataValue('applicantResponse', JSON.stringify(val))
    }
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Response
