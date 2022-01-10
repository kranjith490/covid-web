import { combineReducers } from "redux";

import { chartReducer } from "./Reducer/index";

const rootReducer = combineReducers({
  chartReducer: chartReducer,
});

export default rootReducer;