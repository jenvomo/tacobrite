import * as EventApiUtil from '../util/event_api_util';

export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
export const RECEIVE_EVENT = 'RECEIVE_EVENT';
export const RECEIVE_EVENT_ERRORS = 'RECEIVE_EVENT_ERRORS';

export const fetchEvents = () => dispatch => {
  return EventApiUtil.fetchEvents()
    .then(events => dispatch(receiveEvents(events)),
    errors => dispatch(receiveErrors(errors.responseJSON)))
};

export const fetchEvent = id => dispatch => {
  return EventApiUtil.fetchEvent(id)
    .then(event => dispatch(receiveEvent(event)),
    errors => dispatch(receiveErrors(errors.responseJSON)))
};

export const createEvent = event => dispatch => {
  return EventApiUtil.createEvent(event)
    .then(event => dispatch(receiveEvent(event)),
    errors => dispatch(receiveErrors(errors.responseJSON)))
};

export const updateEvent = event => dispatch => {
  return EventApiUtil.updateEvent(event)
    .then(event => dispatch(receiveEvent(event)),
    errors => dispatch(receiveErrors(errors.responseJSON)))
};

export const receiveEvents = events => ({
  type: RECEIVE_EVENTS,
  events
});

export const receiveEvent = event => ({
  type: RECEIVE_EVENT,
  event
});

export const receiveErrors = errors => ({
  type: RECEIVE_EVENT_ERRORS,
  errors
});
