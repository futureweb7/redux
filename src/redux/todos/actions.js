import { ADDED, ALLCOMPLETED, CLEARCOMPLETED, COLORSELECT, DELETED, TOGGOLED } from "./actionsTypes";

export const added = (todosText) => {
  return {
    type: ADDED,
    payload: todosText,
  };
};

export const allCompleted = () => {
  return {
    type: ALLCOMPLETED,
  };
};

export const clearCompleted = () => {
  return {
    type: CLEARCOMPLETED,
  };
};

export const toggled = (todosId) => {
  return {
    type: TOGGOLED,
    payload: todosId,
  };
};

export const colorSelect = (todosId, color) => {
  return {
    type: COLORSELECT,
    payload: {
      todosId,
      color
    }
  };
};

export const deleted = (todosId) => {
  return {
    type: DELETED,
    payload: todosId
  };
};
