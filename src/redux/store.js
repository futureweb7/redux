import { legacy_createStore as createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer ";
import myLogger from "./customMiddleWare/myLogger";

const store = createStore(rootReducer, applyMiddleware(myLogger));

export default store;