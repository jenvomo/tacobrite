const categoriesReducer = (state, action) => {
  Object.freeze(state);
  
  switch (action.type) {
    case UPDATE_CATEGORY:
    return Object.assign({}, state, action.category)
  }
}