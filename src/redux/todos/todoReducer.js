import { initialState } from "./initialState";
import { ADDED, ALLCOMPLETED, CLEARCOMPLETED, TOGGLED, COLORSELECTED, DELETED } from "./actionsTypes";

const nextTodosId = (todos) => {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
};
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED:
      return [
        ...state,
        {
          id: nextTodosId(state),
          text: action.payload,
          completed: false

        },
      ];
    case ALLCOMPLETED:
      return state.map((todo) => {
        return {
          ...todo,
          completed: true,
        };
      });
    case CLEARCOMPLETED:
      return state.filter((todo) => !todo.completed);

    case TOGGLED:
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        }
        return {
          ...todo,
          completed: !todo.completed,
        };
      });

    case COLORSELECTED:
      // eslint-disable-next-line no-case-declarations
      const { todoId, color } = action.payload;
      return state.map((todo) => {
        if (todo.id !== todoId) {
          return todo;
        }
        return {
          ...todo,
          color,
        };
      });
    case DELETED:
      return state.filter((todo) => todo.id !== action.payload);
    // eslint-disable-next-line no-fallthrough
    default:
      return state;
  }
};

export default todoReducer;
