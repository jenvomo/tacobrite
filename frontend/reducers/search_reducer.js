import {UPDATE_SEARCH} from '../actions/filter_actions';

const searchReducer = (state = null, action) => {
  Object.freeze(state);
  
  switch (action.type) {
    case UPDATE_SEARCH:
      return action.search;
    default:
      return state;
  }
}


export default searchReducer;