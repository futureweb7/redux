import { COLORCHANGED, STATUSCHANGED } from "./actionsTypes";
import initialState from "./initialState";

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUSCHANGED:
      return {
        ...state,
        status: action.payload
      };
    case COLORCHANGED:
      // eslint-disable-next-line no-case-declarations
      const { color, changeType } = action.payload;
      switch (changeType) {
        case "added":
          return {
            ...state,
            colors: [
              ...state.colors,
              color
            ]
          };
        case "removed":
          return {
            ...state,
            colors: state.colors.filter((exixtingColor) => exixtingColor !== color),
          };
        default:
          return state;
      }
    default:
      return state;
  }
};

export default filterReducer;
