import {UPDATE_CATEGORY, UPDATE_FILTERS } from '../actions/filter_actions';

const categoriesReducer = (state = null, action) => {
  Object.freeze(state);

  switch (action.type) {
    case UPDATE_CATEGORY:
      return action.category;
    case UPDATE_FILTERS:
      return action.filters.category;
    default:
      return state;
  }
}

export default categoriesReducer;