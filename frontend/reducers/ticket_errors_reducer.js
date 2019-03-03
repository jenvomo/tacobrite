import { RECEIVE_TICKET_ERRORS, RECEIVE_TICKET } from '../actions/ticket_actions';

const ticketErrorReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_TICKET_ERRORS:
      return action.errors;
    case RECEIVE_TICKET:
      return [];
    default:
      return state;
  }
}

export default ticketErrorReducer;