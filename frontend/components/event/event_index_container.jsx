import EventIndex from './event_index';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { updateFilters, changeCategory, changeSearch } from '../../actions/filter_actions';
import { fetchEvents } from '../../actions/event_actions';
import { fetchCategories } from '../../actions/category_actions';

const mapStateToProps = (state, ownProps) => ({
  events: state.entities.events,
  errors: state.errors,
  categories: state.entities.categories
});


const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  updateFilters: (filters) => dispatch(updateFilters(filters)),
  changeCategory: (category) => dispatch(changeCategory(category)),
  changeSearch: (search) => dispatch(changeSearch(search)),
  fetchEvents: (filters) => dispatch(fetchEvents(filters)),
  fetchCategories: () => dispatch(fetchCategories())
});

export default connect(mapStateToProps, mapDispatchToProps)(EventIndex);
