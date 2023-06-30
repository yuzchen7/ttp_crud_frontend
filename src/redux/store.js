import axios from "axios";
import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./rootReducer";

const logger = createLogger({ collapsed : true });

const middleware = composeWithDevTools(
    applyMiddleware(thunkMiddleware.withExtraArgument({ axios }), logger)
);

const store = createStore(rootReducer, middleware);

export default store;