import EventIndex from './event_index';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchBenches } from '../../actions/event_actions';

const mapStateToProps = ({events, errors}) => ({
  events: state.events,
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchBenches: () => dispatch(fetchBenches())
});

export default connect(mapStateToProps, mapDispatchToProps)(EventIndex);
