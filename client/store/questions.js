import axios from 'axios'

const GET_ALL_QUESTIONS = 'GET_ALL_QUESTIONS'

const getAllQuestions = questions => ({
  type: GET_ALL_QUESTIONS,
  questions
})

export const fetchQuestions = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/questions')
      dispatch(getAllQuestions(data))
    } catch (err) {
      console.error(err)
    }
  }
}

export default function questionReducer(state = [], action) {
  switch (action.type) {
    case GET_ALL_QUESTIONS:
      return action.questions
    default:
      return state
  }
}
