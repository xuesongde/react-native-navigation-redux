import { combineReducers } from "redux";

import example from "./example";
import globalReducer from "./globalReducer";

const rootReducer = combineReducers({
  example,
  globalReducer
});

export default rootReducer;
