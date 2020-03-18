import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  <nav style={{display: 'flex', justifyContent: 'center'}}>
    {isLoggedIn ? (
      <div>
        {/* The navbar will show these links after you log in */}
        <Link className="nav-item" to="/home">
          Home
        </Link>
        <Link className="nav-item" to="/newForm">
          Create Form
        </Link>
        <Link className="nav-item" to="/signup">
          New Account
        </Link>
        <a href="#" onClick={handleClick}>
          Logout
        </a>
      </div>
    ) : // {/* The navbar will show these links before you log in */}
    null}
  </nav>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    isSuperAdmin: state.user.SuperAdmin
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
