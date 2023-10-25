import { combineReducers } from "redux";
import counterReducer from "./counter/counterReducer";
import dynamicCounterReducer from "./dynamicCounter/dynamicCounterReducer";
import todoReducer from "./todos/todoReducer";
import filterReducer from "./filter/filterReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  dyCounter: dynamicCounterReducer,
  todos: todoReducer,
  filter: filterReducer,
});
export default rootReducer;
