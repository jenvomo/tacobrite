import EventIndex from './event_index';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchEvents } from '../../actions/event_actions';

const mapStateToProps = (state, ownProps) => ({
  events: state.entities.events,
  errors: state.errors
});


const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchEvents: () => dispatch(fetchEvents())
});

export default connect(mapStateToProps, mapDispatchToProps)(EventIndex);
