import { logout } from '../../actions/session_actions';
import { connect } from 'react/redux';
// import createEvent

const mapStateToProps = state => ({
  // need to add tickets num, saved num, etc
});

const map mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserNavigation);
