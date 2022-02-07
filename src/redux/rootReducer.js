import { combineReducers } from "redux";

import { reducer as walletAuthReducer } from "./walletauth";
// Combine all reducers.

const appReducer = combineReducers({
  walletAuth: walletAuthReducer
});

const rootReducer = (state, action) => {
  // if (action.type === actionTypes.LOGOUT_SUCCESS) {
  //   state = undefined;
  // }
  return appReducer(state, action);
};

export default rootReducer;
