import { 
  RECEIVE_TICKET, 
  RECEIVE_TICKETS } from '../actions/ticket_actions';

const ticketsReducer = (state = {}, action) => {
  Object.freeze(state);
  
  switch (action.type) {
    case RECEIVE_TICKET:
      return Object.assign({}, state, {[action.ticket.id]: action.ticket});
    case RECEIVE_TICKETS:
      return Object.assign({}, state, action.tickets);
    default:
      return state;
  }
}

export default ticketsReducer;