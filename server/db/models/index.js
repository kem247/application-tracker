const User = require('./user')
const Form = require('./form')
const Question = require('./question')
const Response = require('./response')
const Comment = require('./comment')
const ExistingForm = require('./existingForm')

Question.belongsTo(Form)
Form.hasMany(Question)

Response.belongsTo(Form)
Form.hasMany(Response)

Comment.belongsTo(User)
User.hasMany(Comment)

Comment.belongsTo(Response)
Response.hasMany(Comment)

ExistingForm.belongsTo(User)
module.exports = {
  User,
  Form,
  Question,
  Response,
  Comment,
  ExistingForm
}
