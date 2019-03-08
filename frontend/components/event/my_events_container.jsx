import { connect } from 'react-redux';
import { fetchEvents, deleteEvent } from '../../actions/event_actions';
import MyEvents from './my_events';
import React from 'react';

const mapStateToProps = state => {
  return {
    myEvents: state.entities.users[state.session.id].myEvents,
    events: state.entities.events
  }
};

const mapDispatchToProps = dispatch => ({
  fetchEvents: () => dispatch(fetchEvents()),
  deleteEvent: id => dispatch(deleteEvent(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(MyEvents);
