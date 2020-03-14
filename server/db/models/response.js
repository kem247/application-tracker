const Sequelize = require('sequelize')
const db = require('../db')

const Response = db.define('response', {
  applicantReponse: {
    type: Sequelize.STRING,
    get: function() {
      return JSON.parse(this.getDataValue('applicantReponse'))
    },
    set: function(val) {
      return this.setDataValue('applicantReponse', JSON.stringify(val))
    }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Response
