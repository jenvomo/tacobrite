import { combineReducers } from "redux";
import boundsReducer from "./bounds_reducer";

const filtersReducer = combineReducers({
  bounds: boundsReducer
})

export default filtersReducer;