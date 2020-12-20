export const getLoggedAccount = (state) => {
  return state.app?.currentUser;
};

export const getFlashMessage = (state) => state.app.flashMessage;
