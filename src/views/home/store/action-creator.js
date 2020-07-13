import * as actionTypes from "./action-types";
import axios from "axios";

export const getWriterList = () => {
  return (dispatch) => {
    axios.get("/mock/writer-list.json").then(({ data }) => {
      dispatch(changeWriterList(data));
    });
  };
};

export const getArticleList = (page) => {
  return (dispatch) => {
    axios.get(`/mock/article-list.json?page=${page}`).then(({ data }) => {
      dispatch(setArticleList(data));
    });
  };
};

export const changeWriterPage = () => {
  return {
    type: actionTypes.CHANGE_WRITER_PAGE,
  };
};

export const changeScrollShow = (value) => {
  return {
    type: actionTypes.SET_SCROLL_SHOW,
    value,
  };
};

const setArticleList = (value) => {
  return {
    type: actionTypes.SET_ARTICLE_LIST,
    value,
  };
};

const changeWriterList = (value) => {
  return {
    type: actionTypes.CHANGE_WRITER_LIST,
    value,
  };
};
