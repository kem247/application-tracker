import React, {Component} from 'react'
import QuestionsList from './QuestionsList'
import QuestionInput from './QuestionInput'
import axios from 'axios'

//semantic ui
import {
  Form,
  Container,
  Header,
  Icon,
  Button,
  Segment,
  Input
} from 'semantic-ui-react'

class newForm extends Component {
  state = {
    title: '',
    questionsArr: [],
    id: null,
    question: '',
    type: 'textarea',
    option: ''
  }

  handleSubmit = event => {
    console.log('Submitting:', this.state)
    event.preventDefault()
    this.handleAddButton(event)
    axios
      .post('/api/form', {
        title: this.state.title,
        questions: this.state.questionsArr
      })
      .then(res => {
        console.log(res)
      })
      .catch(error => {
        console.log(error)
      })
  }

  handleChange = (e, id) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleAddButton = e => {
    e.preventDefault()
    let newId = this.state.questionsArr.length

    const newQuestionObj = {
      id: newId,
      question: this.state.question,
      type: this.state.type,
      option: ''
    }
    // console.log(newQuestionObj)

    const updateQuestionsArr = [...this.state.questionsArr, newQuestionObj]

    this.setState({
      title: this.state.title,
      questionsArr: updateQuestionsArr,
      question: ''
    })
  }

  handleQuestionDelete = id => {
    const filteredQuestions = this.state.questionsArr.filter(
      question => question.id !== id
    )
    this.setState({
      questionsArr: filteredQuestions
    })
  }

  render() {
    return (
      <div className="newForm">
        <Segment color="purple">
          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <input
                onChange={this.handleChange}
                name="title"
                placeholder="Untitled Application..."
              />
            </Form.Field>
            {this.state.questionsArr.map(question => {
              return (
                <QuestionsList
                  key={question.id}
                  question={question}
                  handleChange={this.handleChange}
                  handleTypeChange={this.handleTypeChange}
                  handleQuestionDelete={() =>
                    this.handleQuestionDelete(question.id)
                  }
                  handleQuestionEdit={() =>
                    this.handleQuestionEdit(question.id)
                  }
                />
              )
            })}
            <QuestionInput
              questionsArr={this.state.questionsArr}
              question={this.state.question}
              handleChange={this.handleChange}
            />

            <Button type="submit">Submit</Button>
          </Form>
        </Segment>
        <Button icon="plus" onClick={this.handleAddButton} />
      </div>
    )
  }
}

export default newForm
