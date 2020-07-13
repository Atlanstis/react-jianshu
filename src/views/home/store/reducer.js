import { fromJS } from "immutable";
import * as actionTypes from "./action-types";

const defaultState = fromJS({
  articleList: [],
  writerList: [],
  page: 1,
  totalPage: 1,
  articlePage: 1,
  showScroll: false,
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_WRITER_LIST:
      return state.merge({
        writerList: fromJS(action.value),
        totalPage: Math.ceil(action.value.length / 5),
      });
    case actionTypes.CHANGE_WRITER_PAGE:
      const page = state.get("page");
      const totalPage = state.get("totalPage");
      let newPage = (page + 1) % totalPage;
      newPage = newPage === 0 ? totalPage : newPage;
      return state.set("page", newPage);
    case actionTypes.SET_ARTICLE_LIST:
      let articleList = state.get("articleList").toJS();
      let articlePage = state.get("articlePage") + 1;
      articleList = articleList.concat(...action.value);
      return state.merge({
        articleList: fromJS(articleList),
        articlePage,
      });
    case actionTypes.SET_SCROLL_SHOW:
      return state.set("showScroll", action.value);
    default:
      return state;
  }
};

export default reducer;
