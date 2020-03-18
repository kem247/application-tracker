import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
// import userForm from './userForm'
import Spinner from './spinner'
/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email} = props

  return (
    <div className="homeContainer">
      {email ? <h3>Welcome, {email}</h3> : <Spinner />}
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
