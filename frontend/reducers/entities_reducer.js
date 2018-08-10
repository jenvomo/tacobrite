import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import eventsReducer from './events_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  events: eventsReducer
});

export default entitiesReducer;
