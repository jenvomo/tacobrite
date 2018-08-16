import { connect } from 'react-redux';
import { updateEvent } from '../../actions/event_actions';
import EventForm from './event_form';

const mapStateToProps = (state, ownProps) => ({
  formType: 'edit',
  errors: state.errors.event,
  event: state.entities.events[ownProps.match.params.eventId],
  eventId: ownProps.match.params.eventId
});

const mapDispatchToProps = dispatch => ({
  processForm: event => dispatch(updateEvent(event)),
  fetchEvent: id => dispatch(fetchEvent(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);
