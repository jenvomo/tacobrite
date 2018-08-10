import {
  RECEIVE_EVENTS,
  RECEIVE_EVENT,
  RECEIVE_EVENT_ERRORS } from '../actions/event_actions';
import { merge } from 'lodash';

const eventsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_EVENTS:
      return merge([], state, action.events);
    case RECEIVE_EVENT:
      return merge([], state, {[action.event.id]: action.event});
    default:
      return state;
  }
}

export default eventsReducer;
