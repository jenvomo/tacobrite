import { connect } from 'react-redux';
import { fetchUsersEvents } from '../../actions/user_actions';
import { fetchEvents } from '../../actions/event_actions';
import MyEvents from './my_events';
import React from 'react';

const mapStateToProps = state => ({
  myEvents: state.entities.users[state.session.id].myEvents,
  events: state.entities.events
});

const mapDispatchToProps = dispatch => ({
  fetchUsersEvents: () => dispatch(fetchUsersEvents()),
  fetchEvents: () => dispatch(fetchEvents())
});

export default connect(mapStateToProps, mapDispatchToProps)(MyEvents);
