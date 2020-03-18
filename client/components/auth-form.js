import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth, signup} from '../store'
import {Link} from 'react-router-dom'

import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}))

/**
 * COMPONENT
 */

const AuthForm = props => {
  const classes = useStyles()
  const {name, displayName, handleSubmit, error} = props

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {name === 'login' ? 'Admin Login' : 'Create New Admin'}
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit} name={name}>
          <Grid container spacing={2}>
            {name === 'login' ? null : (
              <Grid item xs={12}>
                <TextField
                  name="accountName"
                  variant="outlined"
                  required
                  fullWidth
                  id="accountName"
                  label="Full Name"
                  autoFocus
                />
              </Grid>
            )}
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
              />
            </Grid>
            <Button
              type="submit"
              name="action"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              {displayName}
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                {name === 'login' ? (
                  ''
                ) : (
                  <Link to="/home">Go back to Home</Link>
                )}
              </Grid>
            </Grid>
            <div className="row">
              {error &&
                error.response && (
                  <div className="col s12" style={{color: '#fc7070'}}>
                    {' '}
                    {error.response.data}{' '}
                  </div>
                )}
            </div>
          </Grid>
        </form>
      </div>
    </Container>
  )
}

/**
 * CONTAINER
 */
const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapSignup = state => {
  console.log(state)
  return {
    name: 'signup',
    displayName: 'Create New Admin',
    error: state.user.error
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      if (formName === 'login') {
        dispatch(auth(email, password, formName))
      } else {
        const fullName = evt.target.accountName.value
        dispatch(signup(fullName, email, password, formName))
      }
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
