import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchQuestions} from '../store/questions.js'
import {Form, Button, Segment} from 'semantic-ui-react'
class userForm extends Component {
  constructor() {
    super()
    this.state = {
      value: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(event) {
    console.log('A name was submitted: ' + this.state.value)
    event.preventDefault()
  }

  handleChange(e) {
    e.preventDefault()
    this.setState({
      [event.target.name]: e.target.value
    })
  }
  async componentDidMount() {
    await this.props.fetchQuestions()
  }
  render() {
    console.log('PROPS', this.props)
    console.log('STATE', this.state)
    return (
      <div className="userForm">
        <Segment color="yellow">
          <Form onSubmit={this.handleSubmit}>
            {this.props.questions.map(q => {
              return (
                <label key={q.id}>
                  {q.question}
                  <input
                    name={q.type}
                    type={q.type}
                    value={this.state.value}
                    onChange={this.handleChange}
                  />
                </label>
              )
            })}
            <Button type="submit" value="Submit" />
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
