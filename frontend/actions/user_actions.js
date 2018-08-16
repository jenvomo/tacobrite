import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_USERS_EVENTS = "RECEIVE_USERS_EVENTS";

export const fetchUsersEvents = () => dispatch => {
  return UserApiUtil.fetchUsersEvents()
    .then(events => dispatch(receiveUsersEvents(events)));
};

const receiveUsersEvents = events => ({
  type: RECEIVE_USERS_EVENTS,
  events
});
