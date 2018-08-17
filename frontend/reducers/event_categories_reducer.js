import {
  RECEIVE_EVENT,
  REMOVE_EVENT } from '../actions/event_actions';
import { merge } from 'lodash';

const eventCategoriesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    // case RECEIVE_EVENT:
      // return merge({}, state, {event_id: action.event.id, category_id: action.categoryId);

    default:
      return state;
  }
}
