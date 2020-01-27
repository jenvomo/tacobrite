import { connect } from 'react-redux';
import Search from './search';
import { fetchEvents } from '../../actions/event_actions';
import { fetchCategories } from '../../actions/category_actions';
import { updateBounds, updateSearch, updateCategory } from '../../actions/filter_actions';

const mapStateToProps = state => ({
  events: state.entities.events,
  search: state.ui.filters.search,
  categories: state.entities.categories
});

const mapDispatchToProps = dispatch => ({
  fetchEvents: filters => dispatch(fetchEvents(filters)),
  fetchCategories: () => dispatch(fetchCategories()),
  updateBounds: bounds => dispatch(updateBounds(bounds)),
  updateSearch: search => dispatch(updateSearch(search)),
  updateCategory: category => dispatch(updateCategory(category))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);