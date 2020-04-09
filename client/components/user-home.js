import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Spinner from './spinner'
import {Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import ExistingForm from './existingForm'

/**
 * COMPONENT
 */
const UserHome = props => {
  const {email} = props

  return (
    <div className="homeContainer">
      {email ? (
        <div className="home-context">
          <h3 style={{marginBottom: '0px'}}>Current Forms</h3>
          <small>Logged in as: {email}</small>
          <ExistingForm />
          <Link to="/newForm">
            <Button color="yellow">Create New Form</Button>
          </Link>
        </div>
      ) : (
        <Spinner />
      )}
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
