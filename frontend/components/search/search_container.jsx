import { connect } from 'react-redux';
import Search from './search';
import { fetchEvents } from '../../actions/event_actions';
import { updateBounds } from '../../actions/filter_actions';

const mapStateToProps = state => ({
  events: state.entities.events
});

const mapDispatchToProps = dispatch => ({
  fetchEvents: filters => dispatch(fetchEvents(filters)),
  updateBounds: bounds => dispatch(updateBounds(bounds))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);