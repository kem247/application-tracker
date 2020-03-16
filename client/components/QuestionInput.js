import React, {Component} from 'react'
import {Form, Select, Button} from 'semantic-ui-react'

const options = [
  {text: 'textarea', value: 'textarea'},
  {text: 'text Input', value: 'text Input'},
  {text: 'checkbox', value: 'checkbox'},
  {text: 'date', value: 'date'}
]

class QuestionInput extends Component {
  render() {
    const {questionsArr, question, id, handleChange} = this.props
    return (
      <div>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            name="question"
            width={12}
            placeholder="Type your question..."
            value={question}
            onChange={(e, id) => handleChange(e, id)}
          />
          <Form.Field
            onChange={(e, id) => handleChange(e, id)}
            width={6}
            name="type"
            control="select"
            placeholder="Question Type"
          >
            <option value="textarea">textarea</option>
            <option value="text input">text input</option>
            <option value="checkbox">checkbox</option>
            <option value="date">date</option>
          </Form.Field>
        </Form.Group>
      </div>
    )
  }
}

export default QuestionInput

// {
//   questionsArr.length >= 0 && question.type === 'checkbox' ?
//   (<Form.Group grouped>
//     <label>HTML checkboxes</label>
//     <Form.Field label='This one' control='input' type='checkbox' />
//     <Form.Field label='That one' control='input' type='checkbox' />
//   </Form.Group>) :
//   null
// }
