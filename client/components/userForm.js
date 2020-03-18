import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchQuestions} from '../store/questions.js'

class userForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.props.questions.map(q => {
          return (
            <label>
              {q.question}
              <input
                key={q.id}
                type=""
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
          )
        })}

        <input type="submit" value="Submit" />
      </form>
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
