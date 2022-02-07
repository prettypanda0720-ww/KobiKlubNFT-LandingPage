import React, {
  useContext,
  useReducer,
  useEffect,
  useCallback,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import WalletLink from "walletlink";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import { setWeb3Provider } from "../redux/walletauth/actions";
import { selectWalletAuth } from "../redux/walletauth/selectors";


export const LS_KEY = "token";

const initialState = {
  provider: null,
  web3Provider: null,
  address: null,
  chainId: null,
  isLoggedin: false,
};

const WalletContext = React.createContext({
  ...initialState,
  connect: () => {},
  disconnect: () => {},
});

export const useWalletContext = () => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error("WalletContext does not exist");
  }
  return context;
};

const INFURA_ID = process.env.REACT_APP_INFURA_ID;

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: INFURA_ID,
    },
    display: {
      description: "Use Rainbow & other popular wallets",
    },
  },
  "custom-walletlink": {
    display: {
      logo: "/image/coinbase.png",
      name: "Coinbase Wallet",
      description: "Connect to Coinbase Wallet mobile app",
    },
    options: {
      appName: "Coinbase", // App name on Infura
      networkUrl: `https://rinkeby.infura.io/v3/${INFURA_ID}`,
      chainId: 1,
    },
    package: WalletLink,
    connector: async (_ : any, options: any) => {
      const { appName, networkUrl, chainId } = options;
      const walletLink = new WalletLink({
        appName,
      });
      const provider = walletLink.makeWeb3Provider(networkUrl, chainId);
      await provider.enable();
      return provider;
    },
  },
};

let web3Modal: any;
if (typeof window !== "undefined") {
  web3Modal = new Web3Modal({
    network: "mainnet", // optional
    cacheProvider: true, // optional
    providerOptions, // required
  });
}

const WalletProvider = ({ children }: any) => {
  const { state, provider } = useSelector(selectWalletAuth);
  const dispatch = useDispatch();

  const connect = useCallback(async () => {
    console.log("connect is called!");
    // This is the initial `provider` that is returned when
    // using web3Modal to connect. Can be MetaMask or WalletConnect.

    try {
        const provider = await web3Modal.connect();

        // We plug the initial `provider` into ethers.js and get back
        // a Web3Provider. This will add on methods from ethers.js and
        // event listeners such as `.on()` will be different.
        const web3Provider = new ethers.providers.Web3Provider(provider);
        const signer = web3Provider.getSigner();
        const address = await signer.getAddress();
        const network = await web3Provider.getNetwork();
    
        const values = {
          provider,
          web3Provider,
          signer,
          address,
          chainId: network.chainId,
          isLoggedin: true
        };
        dispatch(setWeb3Provider(values));
    } catch(error) {
        console.log('connect wallet error', error);
    }

  }, []);

  const disconnect = useCallback(
    async function () {
      await web3Modal.clearCachedProvider();
      if (provider?.disconnect && typeof provider.disconnect === "function") {
        await provider.disconnect();
      }
      dispatch({
        type: "RESET_WEB3_PROVIDER",
      });
    },
    [provider]
  );

  // Auto connect to the cached provider
  useEffect(() => {
    if (web3Modal.cachedProvider) {
      connect();
    }
  }, [connect]);

  // A `provider` should come with EIP-1193 events. We'll listen for those events
  // here so that when a user switches accounts or networks, we can update the
  // local React state with that new information.
  useEffect(() => {
    if (provider?.on) {
      const handleAccountsChanged = async (
        event: any /*accounts: string[]*/
      ) => {
        console.log("handleAccountChanged", event);
        // dispatch({
        //   type: "SET_ADDRESS",
        //   address: accounts[0],
        // });
      };

      const handleChainChanged = async (event: any) => {
        console.log("handleChainChanged", event);

        // We plug the initial `provider` into ethers.js and get back
        // a Web3Provider. This will add on methods from ethers.js and
        // event listeners such as `.on()` will be different.
        const web3Provider = new ethers.providers.Web3Provider(provider);
        const signer = web3Provider.getSigner();
        const address = await signer.getAddress();
        const network = await web3Provider.getNetwork();

        const values = {
          provider,
          web3Provider,
          signer,
          address,
          chainId: network.chainId,
        };
        console.log("switched network values", values);
        dispatch(setWeb3Provider(values));
      };

      const handleDisconnect = (error: { code: number, message: string }) => {
        disconnect();
      };

      provider.on("accountsChanged", handleAccountsChanged);
      provider.on("chainChanged", handleChainChanged);
      provider.on("disconnect", handleDisconnect);

      return () => {
        if (provider.removeListener) {
          provider.removeListener("accountsChanged", handleAccountsChanged);
          provider.removeListener("chainChanged", handleChainChanged);
          provider.removeListener("disconnect", handleDisconnect);
        }
      };
    }
  }, [provider, disconnect]);

  const actions = {
    connect,
    disconnect,
  };

  return (
    <WalletContext.Provider value={{ ...state, ...actions }}>
      {children}
    </WalletContext.Provider>
  );
};

export default WalletProvider;
