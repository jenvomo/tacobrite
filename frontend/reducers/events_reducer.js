import {
  RECEIVE_EVENTS,
  RECEIVE_EVENT,
  REMOVE_EVENT } from '../actions/event_actions';

const eventsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_EVENTS:
      return Object.assign({}, state, action.events);
    case RECEIVE_EVENT:
      return Object.assign({}, state, {[action.event.id]: action.event});
    case REMOVE_EVENT:
      const nextState = Object.assign({}, state);
      delete nextState[action.id];
      return nextState;
    default:
      return state;
  }
}

export default eventsReducer;
