import {
  SET_LOGGED_ACCOUNT,
  SHOW_FLASH_MESSAGE,
  REMOVE_FLASH_MESSAGE,
} from './constants';

const initialMessageState = { type: null, message: null, description: null };

const initialState = {
  currentUser: null,
  flashMessage: initialMessageState,
};

function app(state = initialState, action) {
  switch (action.type) {
    case SET_LOGGED_ACCOUNT:
      return { ...state, currentUser: action.payload.currentUser };
    case SHOW_FLASH_MESSAGE:
      return { ...state, flashMessage: action.payload };
    case REMOVE_FLASH_MESSAGE:
      return { ...state, flashMessage: initialMessageState };
    default:
      return state;
  }
}

export default app;
