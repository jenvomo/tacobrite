import { logout } from '../../actions/session_actions';
import { connect } from 'react/redux';

const mapStateToProps = state => ({
});

const map mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserNavigation);
