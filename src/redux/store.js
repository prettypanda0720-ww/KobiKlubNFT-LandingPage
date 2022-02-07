import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

import rootReducer from "./rootReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const logger = createLogger();
let middleware = [thunk];

let configStore = composeWithDevTools(
    applyMiddleware(...middleware)
    // other store enhancers if any
    );

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

if (process.env.NODE_ENV === "development") {
  middleware = [...middleware, logger];
  configStore = composeEnhancers(applyMiddleware(...middleware));
}

const initialState = {};

const store = createStore(rootReducer, initialState, configStore);

export default store;
