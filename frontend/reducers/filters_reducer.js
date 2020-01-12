import { combineReducers } from "redux";
import boundsReducer from "./bounds_reducer";
import categoriesReducer from "./categories_reducer";

const filtersReducer = combineReducers({
  bounds: boundsReducer,
  category: categoriesReducer
})

export default filtersReducer;