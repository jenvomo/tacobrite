import { connect } from 'react-redux';
import Search from './search';
import { fetchEvents } from '../../actions/event_actions';
import { updateBounds, updateSearch } from '../../actions/filter_actions';

const mapStateToProps = state => ({
  events: state.entities.events,
  search: state.ui.filters.search
});

const mapDispatchToProps = dispatch => ({
  fetchEvents: filters => dispatch(fetchEvents(filters)),
  updateBounds: bounds => dispatch(updateBounds(bounds)),
  updateSearch: search => dispatch(updateSearch(search))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);