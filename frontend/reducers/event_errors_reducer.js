import { RECEIVE_EVENT_ERRORS } from '../actions/event_actions';

const eventErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_EVENT_ERRORS:
      return action.errors;
    default:
      return state;
  }
}

export default eventErrorsReducer;
