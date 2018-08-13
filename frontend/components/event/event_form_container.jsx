import { connect } from 'react-redux';
import { createEvent, fetchEvents } from '../../actions/event_actions';
import EventForm from './event_form';

const mapStateToProps = ({ errors }) => ({
  errors: errors.event
});

const mapDispatchToProps = dispatch => ({
  createEvent: event => dispatch(createEvent(event)),
  fetchEvents: () => dispatch(fetchEvents())
});

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);
