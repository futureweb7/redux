import { DYDECREMENT, DYINCREMENT } from "./actionType";

export const increment = (value) => {
  return {
    type: DYINCREMENT,
    payload: value,
  };
};
export const decrement = (value) => {
  return {
    type: DYDECREMENT,
    payload: value,
  };
};
