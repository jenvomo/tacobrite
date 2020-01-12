import { fetchEvents } from "../actions/event_actions";

export const UPDATE_BOUNDS = 'UPDATE_BOUNDS';

export const changeCategory = id => {
  return ({
    type: UPDATE_CATEGORY,
    category: id
  })
};

export const changeBounds = bounds => ({
  type: UPDATE_BOUNDS,
  bounds
});

export const updateCategory = id => (dispatch, getState) => {
  dispatch(changeCategory(id));
  return fetchEvents(getState().ui.filters)(dispatch);
}

export const updateBounds = bounds => (dispatch, getState) => {
  dispatch(changeBounds(bounds));
  return fetchEvents(getState().ui.filters)(dispatch);
}