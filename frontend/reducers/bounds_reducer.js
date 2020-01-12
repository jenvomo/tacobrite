import {UPDATE_BOUNDS} from '../actions/filter_actions';

let defaultState = {
  northEast: { lat: 37.83005348467966, lng: -122.36633544921875 },
  southWest: { lat: 37.72150667205263, lng: -122.50366455078125 }
};

const boundsReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case UPDATE_BOUNDS:
      return Object.assign({}, state, action.bounds);
    default:
      return state;
  }
}

export default boundsReducer;