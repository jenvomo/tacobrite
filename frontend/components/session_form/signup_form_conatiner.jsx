import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../../actions/session_actions'
import { Link } from 'react-router-dom';
import React from 'react';
import { receiveErrors } from '../../actions/session_actions';

const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
  formType: 'signup',
  navLink: <Link className='login-switch' to='/login'>Log In</Link>
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(signup(user)),
  receiveErrors: errors => dispatch(receiveErrors(errors))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
