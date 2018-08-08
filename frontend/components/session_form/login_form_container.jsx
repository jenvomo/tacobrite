import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login } from '../../actions/session_actions';
import { Link } from 'react-router-dom';

const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
  formType: 'login',
  navLink: <Link to='/signup'>Sign Up</Link>
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
