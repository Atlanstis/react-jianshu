import * as actionTypes from "./action-types";
import { fromJS } from "immutable";

const defaultState = fromJS({
  focused: false,
  list: [],
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_FOCUS:
      return state.set("focused", action.value);
    case actionTypes.CHANGE_LIST:
      return state.set("list", fromJS(action.value));
    default:
      return state;
  }
};

export default reducer;
