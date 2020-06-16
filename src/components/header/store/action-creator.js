import * as actionTypes from "./action-types";

export const searchFocus = (value) => {
  return {
    type: actionTypes.SEARCH_FOCUS,
    value,
  };
};
