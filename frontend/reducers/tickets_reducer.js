import { RECEIVE_TICKET } from '../actions/ticket_actions';

const ticketsReducer = (state = {}, action) => {
  Object.freeze(state);
  // debugger
  switch (action.type) {
  case RECEIVE_TICKET:
    return Object.assign({}, state, {[action.ticket.id]: action.ticket});
  default:
    return state;
  }
}

export default ticketsReducer;