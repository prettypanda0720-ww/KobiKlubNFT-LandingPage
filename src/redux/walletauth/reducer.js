import * as actionTypes from "./types";

const INITIAL_STATE = {
  provider: null,
  web3Provider: null,
  signer: null,
  address: null,
  chainId: null,
  walletAuth: {},
  isLoggedin: false
};

const walletAuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_WEB3_PROVIDER:
      return {
        ...state,
        provider: action.payload.provider,
        web3Provider: action.payload.web3Provider,
        signer: action.payload.signer,
        address: action.payload.address,
        chainId: action.payload.chainId,
        isLoggedin: action.payload.isLoggedin
      };
    case actionTypes.SET_ADDRESS:
      return {
        ...state,
        address: action.address,
      };
    case actionTypes.SET_CHAIN_ID:
      return {
        ...state,
        chainId: action.chainId,
      };
    case actionTypes.SET_WALLET_AUTH:
      console.log('action.auth', action.walletAuth);
      return {
        ...state,
        walletAuth: action.walletAuth, 
      };
    case actionTypes.RESET_WEB3_PROVIDER:
      return INITIAL_STATE;
    default:
      return state;  

  }
};

export default walletAuthReducer;
