import { fromJS } from "immutable";
import * as actionTypes from "./action-types";

const defaultState = fromJS({
  articleList: [
    {
      id: 1,
      title: "“同居三年，我睡够你了”",
      desc:
        "01 看着朋友圈的姐妹一个个的相亲、结婚、生孩子，跨入已婚的行列，最后投身于晒娃和烘焙的行业当中。小鹿很是羡慕，但是没想把份子钱收回来，哦哦...",
      pic:
        "https://upload-images.jianshu.io/upload_images/6748852-f5632acb7aa5d8f6.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
    },
  ],
  writerList: [],
  page: 1,
  totalPage: 1,
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
    default:
      return state;
  }
};

export default reducer;
