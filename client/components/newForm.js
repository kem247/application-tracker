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
    console.log(this.state)
    event.preventDefault()
    axios
      .post('https://localhost/api/form', this.state)
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

  // here where we are left
  handleAddButton = e => {
    e.preventDefault()
    let newId = this.state.questionsArr.length

    const newQuestionObj = {
      title: this.state.title,
      id: newId,
      question: this.state.question,
      type: this.state.type,
      option: ''
    }
    console.log(newQuestionObj)

    const updateQuestionsArr = [...this.state.questionsArr, newQuestionObj]

    this.setState({
      questionsArr: updateQuestionsArr,
      question: ''
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log('submitting')
    this.handleAddButton(e)
  }

  handleQuestionDelete = id => {
    const filteredQuestions = this.state.questionsArr.filter(
      question => question.id !== id
    )
    this.setState({
      questionsArr: filteredQuestions
    })
  }

  handleQuestionEdit = id => {}

  render() {
    return (
      <div className="newForm">
        <Segment color="purple">
          <Form>
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
            <Button onClick={this.handleSubmit} type="submit">
              Submit
            </Button>
          </Form>
        </Segment>
        <Button icon="plus" onClick={this.handleAddButton} />
      </div>
    )
  }
}

export default newForm
