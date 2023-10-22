import rootReducer from "../rootReducer ";

const myLogger = (store) => (next) => (action) => {
  console.log(`Action: ${JSON.stringify(action)}`);
  console.log(`Before: ${JSON.stringify(store.getState())}`);
  const After = [action].reduce(rootReducer, store.getState());
  console.log("After:", After);
  return next(action);
};
export default myLogger;
