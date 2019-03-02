import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_EVENT } from '../actions/event_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.user.id]: action.user });
    case RECEIVE_EVENT:
      const nextState = Object.assign({}, state);
      if (Object.values(nextState)[0]) {
        const eventArray = Object.values(nextState)[0].myEvents;
  
        let exists = false;
        eventArray.forEach(id => {
          if ( id === action.event.id ) {
            exists = true;
          }
        });
        if ( !exists ) eventArray.push(action.event.id);
        return nextState;
      } else {
        return state;
      }
    default:
      return state;
  };
};

export default usersReducer;
