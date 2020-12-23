import {
  SET_LOGGED_ACCOUNT,
  SHOW_FLASH_MESSAGE,
  REMOVE_FLASH_MESSAGE,
  UPDATE_CATEGORIES
} from './constants';

const initialMessageState = { type: null, message: null, description: null };

const initialState = {
  loggedAccount: null,
  flashMessage: initialMessageState,
  categories: []
};

function app(state = initialState, action) {
  switch (action.type) {
    case SET_LOGGED_ACCOUNT:
      return { ...state, loggedAccount: action.payload.loggedAccount };
    case SHOW_FLASH_MESSAGE:
      return { ...state, flashMessage: action.payload };
    case REMOVE_FLASH_MESSAGE:
      return { ...state, flashMessage: initialMessageState };
    case UPDATE_CATEGORIES:
      return { ...state, categories: action.payload.categories };
    default:
      return state;
  }
}

export default app;
