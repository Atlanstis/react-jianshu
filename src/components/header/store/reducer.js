import * as actionTypes from "./action-types";

const defaultState = {
  focused: false,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_FOCUS:
      return Object.assign({}, state, { focused: action.value });
    default:
      return state;
  }
};

export default reducer;
