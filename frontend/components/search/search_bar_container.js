import { updateSearch } from '../../actions/filter_actions';
import { connect } from 'react-redux';
import SearchBar from './search_bar';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  updateSearch: search => dispatch(updateSearch(search))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);