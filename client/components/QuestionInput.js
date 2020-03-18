import React, {Component} from 'react'
import {Form, Select, Button} from 'semantic-ui-react'

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
            onChange={this.handleOptions}
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
