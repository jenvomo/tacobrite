import { connect } from 'react-redux';
import { fetchUsersEvents } from '../../actions/user_actions';
import MyEvents from './my_events';
import React from 'react';

const mapStateToProps = state => ({
  myEvents: state.myEvents
});

const mapDispatchToProps = dispatch => ({
  fetchUsersEvents: () => dispatch(fetchUsersEvents())
});

export default connect(mapStateToProps, mapDispatchToProps)(MyEvents);
