import * as actionTypes from "./action-types";
import axios from "axios";

export const getWriterList = () => {
  return (dispatch) => {
    axios.get("/mock/writer-list.json").then(({ data }) => {
      dispatch(changeWriterList(data));
    });
  };
};

export const changeWriterPage = () => {
  return {
    type: actionTypes.CHANGE_WRITER_PAGE,
  };
};

const changeWriterList = (value) => {
  return {
    type: actionTypes.CHANGE_WRITER_LIST,
    value,
  };
};
