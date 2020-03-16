import React, {Component} from 'react'
import {Form, Select, Icon} from 'semantic-ui-react'
import QuestionInput from './QuestionInput'

class QuestionsList extends Component {
  render() {
    const {
      question,
      handleChange,
      handleTypeChange,
      handleQuestionDelete,
      handleQuestionEdit
    } = this.props
    return (
      <div>
        <Form.Group widths="equal">
          <Form.Input fluid width={12} value={question.question} />

          <Form.Field width={6} placeholder="Question Type">
            <Form.Input value={question.type} />
          </Form.Field>
          <Icon name="delete" onClick={handleQuestionDelete} />
        </Form.Group>
      </div>
    )
  }
}

export default QuestionsList
