import { legacy_createStore as createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer ";
import logger from 'redux-logger'
// import myLogger from "./customMiddleWare/myLogger";


const store = createStore(rootReducer, applyMiddleware(logger));

export default store;