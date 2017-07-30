export const setAuthData = (state = [], action) => {
  switch (action.type) {
  case 'AUTH_DATA' :
    return action.authData;
  default:
    return state;
  }
}
