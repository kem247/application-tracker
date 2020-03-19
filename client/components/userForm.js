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

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.handleChange(event)
  }
  async componentDidMount() {
    await this.props.fetchQuestions()
  }
  render() {
    console.log('PROPS', this.props)
    return (
      <form onSubmit={this.handleSubmit}>
        {this.props.questions.map(q => {
          return (
            <label>
              {q.question}
              <input
                key={q.id}
                type={q.type}
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
