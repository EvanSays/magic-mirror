export const testFavorites = (state = [], action) => {
  switch (action.type) {
  case 'USER_FAVORITES' :
    return action.testFavorites;
  case 'LOGGED_OUT_USER' :
    return [];
  default:
    return state;
  }
};
