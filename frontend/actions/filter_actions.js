import { fetchEvents } from "../actions/event_actions";

export const UPDATE_BOUNDS = 'UPDATE_BOUNDS';

export const changeCategory = category => {
  return ({
    type: UPDATE_CATEGORY,
    category
  })
};

export const changeBounds = bounds => ({
  type: UPDATE_BOUNDS,
  bounds
});

export const updateCategory = category => (dispatch, getState) => {
  dispatch(changeCategory(category));
  return fetchEvents(getState().ui.filters)(dispatch);
}

export const updateBounds = bounds => (dispatch, getState) => {
  dispatch(changeBounds(bounds));
  return fetchEvents(getState().ui.filters)(dispatch);
}