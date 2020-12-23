import MessageType from "./MessageType";

const {
  SET_LOGGED_ACCOUNT,
  SHOW_FLASH_MESSAGE,
  REMOVE_FLASH_MESSAGE,
  UPDATE_CATEGORIES
} = require("./constants");

export function setLoggedAccount(loggedAccount = null) {
  return {
    type: SET_LOGGED_ACCOUNT,
    payload: {
      loggedAccount,
    },
  };
}

export function showFlashMessage({
  type = MessageType.Type.DANGER,
  description = "",
}) {
  return {
    type: SHOW_FLASH_MESSAGE,
    payload: {
      type,
      message: "",
      description,
    },
  };
}

export function removeFlashMessage() {
  return {
    type: REMOVE_FLASH_MESSAGE,
  };
}

export function updateCategories(categories) {
  return {
    type: UPDATE_CATEGORIES,
    payload: {
      categories: categories,
    },
  };
}