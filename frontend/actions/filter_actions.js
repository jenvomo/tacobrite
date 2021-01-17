import { fetchEvents, fetchEvent } from "../actions/event_actions";

export const UPDATE_BOUNDS = 'UPDATE_BOUNDS';
export const UPDATE_FILTERS = 'UPDATE_FILTERS';
export const UPDATE_SEARCH = 'UPDATE_SEARCH';
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY';
export const UPDATE_PRICE = 'UPDATE_PRICE';

export const changePrice = price => {
  return ({
    type: UPDATE_PRICE,
    price
  })
};

export const changeCategory = category => {
  return ({
    type: UPDATE_CATEGORY,
    category
  })
};

export const changeSearch = search => ({
  type: UPDATE_SEARCH,
  search
})

export const changeBounds = bounds => ({
  type: UPDATE_BOUNDS,
  bounds
});

export const changeFilters = filters => ({
  type: UPDATE_FILTERS,
  filters
})

export const updateCategory = category => (dispatch, getState) => {
  dispatch(changeCategory(category));
  return fetchEvents(getState().ui.filters)(dispatch);
}

export const updatePrice = price => (dispatch, getState) => {
  dispatch(changePrice(price));
  return fetchEvents(getState().ui.filters)(dispatch);
}

export const updateBounds = bounds => (dispatch, getState) => {
  dispatch(changeBounds(bounds));
  return fetchEvents(getState().ui.filters)(dispatch);
}

export const updateFilters = filters => (dispatch, getState) => {
  dispatch(changeFilters(filters));
  return fetchEvents(getState().ui.filters)(dispatch);
}

export const updateSearch = search => (dispatch, getState) => {
  dispatch(changeSearch(search));
  return fetchEvents(getState().ui.filters)(dispatch);
}