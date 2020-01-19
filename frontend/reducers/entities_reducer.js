import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import eventsReducer from './events_reducer';
import ticketsReducer from './tickets_reducer';
import eventCategoriesReducer from './event_categories_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  events: eventsReducer,
  tickets: ticketsReducer,
  categories: eventCategoriesReducer
});

export default entitiesReducer;
