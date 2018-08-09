import EventIndex from './event_index';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(EventIndex);
