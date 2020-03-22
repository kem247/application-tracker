import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchQuestions} from '../store/questions.js'
import {Form, Button, Segment, Label} from 'semantic-ui-react'
class userForm extends Component {
  constructor() {
    super()
    this.state = {
      questions: [],
      value: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
  }
  async componentDidMount() {
    await this.props.fetchQuestions()
  }
  handleChange(e, idx) {
    e.preventDefault()
    let newVal = this.state.value.slice(',')
    this.setState({
      newVal: e.target.value
    })
  }

  render() {
    console.log('PROPS', this.props)
    console.log('STATE', this.state)
    return (
      <div className="userForm">
        <Segment color="yellow">
          <Form onSubmit={this.handleSubmit} onChange={this.handleChange}>
            {this.props.questions.map(q => {
              return (
                <label>
                  {q.question}
                  <input
                    key={q.id}
                    onChange={this.handleChange}
                    name={q.question}
                    type={q.type}
                  />
                </label>
              )
            })}
            {/* {this.props.questions.map(question => {
              return (
                <Segment key={question.id}>
                  <Label>{question.question}</Label>
                </Segment>
              )
            })} */}
            {/* {this.props.questions.map(q => {
              return (
                <label key={q.id}>
                  {q.question}
                  <input
                    name={q.question}
                    type={q.type}
                    value={this.state.value}
                    onChange={this.handleChange}
                  />
                </label>
              )
            })} */}
            <Button type="submit" value="Submit">
              Submit
            </Button>
          </Form>
        </Segment>
      </div>
    )
  }
}

const mapState = state => {
  return {
    questions: state.questions
  }
}

const mapDispatch = dispatch => {
  return {
    fetchQuestions: () => dispatch(fetchQuestions())
  }
}

export default connect(mapState, mapDispatch)(userForm)
