import { combineReducers } from "redux";
import boundsReducer from "./bounds_reducer";
import categoriesReducer from "./categories_reducer";
import searchReducer from "./search_reducer";

const filtersReducer = combineReducers({
  bounds: boundsReducer,
  category: categoriesReducer,
  search: searchReducer
})

export default filtersReducer;