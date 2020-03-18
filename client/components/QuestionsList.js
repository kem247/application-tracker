import React, {Component} from 'react'
import {Icon, Segment, Item, Label, Button} from 'semantic-ui-react'
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
        <Segment>
          <Item.Content>
            <Item.Header as="a">{question.question}</Item.Header>
            <Button
              onClick={handleQuestionDelete}
              color="red"
              size="mini"
              floated="right"
            >
              <Icon name="delete" />
            </Button>
            <Item.Meta>[........ applicant input ........]</Item.Meta>
            <Item.Extra>
              <Label>Input type : {question.type}</Label>
            </Item.Extra>
          </Item.Content>
        </Segment>{' '}
        <br />
      </div>
    )
  }
}

export default QuestionsList
