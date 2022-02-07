import { createSelector } from "reselect";
const walletAuthSelect = (state) => state.walletAuth;

export const selectWalletAuth = createSelector([walletAuthSelect], (walletAuth) => walletAuth);
export const selectProvider = createSelector(
  [walletAuthSelect],
  (walletAuth) => walletAuth.provider
);

export const selectWeb3Provider = createSelector(
  [walletAuthSelect],
  (walletAuth) => walletAuth.web3Provider
);

export const selectAddress = createSelector(
  [walletAuthSelect],
  (walletAuth) => walletAuth.address
);

export const selectChainId = createSelector(
  [walletAuthSelect],
  (walletAuth) => walletAuth.chainId
);

export const selectIsLoggedin = createSelector(
  [walletAuthSelect],
  (walletAuth) => walletAuth.isLoggedin
);