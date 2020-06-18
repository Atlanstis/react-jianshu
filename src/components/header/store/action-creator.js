import * as actionTypes from "./action-types";
import axios from "axios";

export const searchFocus = (value) => {
  return {
    type: actionTypes.SEARCH_FOCUS,
    value,
  };
};

export const listPageChange = () => {
  return {
    type: actionTypes.LIST_PAGE_CHANGE,
  };
};

export const mouseStatusChagne = (value) => {
  return {
    type: actionTypes.MOUSE_STATUS_CHANGE,
    value
  };
};

const changeList = (value) => {
  return {
    type: actionTypes.CHANGE_LIST,
    value,
  };
};

export const getList = () => {
  return (dispatch) => {
    axios
      .get("/mock/header-list.json")
      .then(({ data }) => {
        dispatch(changeList(data));
      })
      .catch((err) => {});
  };
};
