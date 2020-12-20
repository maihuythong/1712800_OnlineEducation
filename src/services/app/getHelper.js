export const getLoggedAccount = (state) => {
  return state.app?.loggedAccount;
};

export const getFlashMessage = (state) => state.app.flashMessage;
