import {UPDATE_BOUNDS} from '../actions/filter_actions';

const boundsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case UPDATE_BOUNDS:
      return Object.assign({}, state, action.bounds);
    default:
      return state;
  }
}

export default boundsReducer;