import Navigation from './navigation';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

const mapStateToProps = ({ session, entities: { users }}) => ({
  currentUser: users[session.id]
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
