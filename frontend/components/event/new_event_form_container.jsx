import { connect } from 'react-redux';
import { createEvent, fetchEvents, updateEvent } from '../../actions/event_actions';
import EventForm from './event_form';

const mapStateToProps = (state, ownProps) => ({
  formType: 'new',
  errors: state.errors.event
});

const mapDispatchToProps = dispatch => ({
  processForm: event => dispatch(createEvent(event)),
  fetchEvent: id => dispatch(fetchEvent(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);
