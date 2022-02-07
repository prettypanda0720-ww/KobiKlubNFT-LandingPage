import * as actionTypes from "./types";

export const setWeb3Provider = (data) => async (dispatch) => {
  console.log('redux walletauth action', data);
  dispatch({
    type: actionTypes.SET_WEB3_PROVIDER,
    payload: data,
  });
};
