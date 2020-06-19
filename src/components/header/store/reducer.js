import * as actionTypes from "./action-types";
import { fromJS } from "immutable";

const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1,
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_FOCUS:
      return state.set("focused", action.value);
    case actionTypes.CHANGE_LIST:
      return state.merge({
        list: fromJS(action.value),
        totalPage: Math.ceil(action.value.length / 10),
      });
    case actionTypes.MOUSE_STATUS_CHANGE:
      return state.set("mouseIn", action.value);
    case actionTypes.LIST_PAGE_CHANGE:
      const page = state.get("page");
      const totalPage = state.get("totalPage");
      let newPage = (page + 1) % totalPage;
      newPage = newPage === 0 ? totalPage : newPage
      return state.set("page", newPage);
    default:
      return state;
  }
};

export default reducer;
