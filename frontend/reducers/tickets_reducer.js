import RECEIVE_TICKET from '../actions/ticket_actions';
import { merge } from 'lodash';

const ticketsReducer = (state = {}, action) => {
    Object.freeze(state);
    // debugger
    switch (action.type) {
    case RECEIVE_TICKET:
        return merge({}, state, {[action.ticket.id]: action.ticket});
    default:
        return state;
    }
}

export default ticketsReducer;