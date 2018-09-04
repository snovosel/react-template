import { combineReducers } from "redux";

// every feature should have its own reducer here
import { reducer as index } from "Index/ducks.js";

export const rootReducer = combineReducers({
  index,
});
