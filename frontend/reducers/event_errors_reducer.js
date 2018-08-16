import {
  RECEIVE_EVENT_ERRORS,
  RECEIVE_EVENT } from '../actions/event_actions';

const eventErrorsReducer = (state = [], action) => {

  switch (action.type) {
    case RECEIVE_EVENT_ERRORS:
      return Object.assign([], action.errors);
    case RECEIVE_EVENT:
      return [];
    default:
      return state;
  }
}

export default eventErrorsReducer;
