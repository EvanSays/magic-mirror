export const setGifyData = (state = [], action) => {
  switch (action.type) {
  case 'GIFY_DATA' :
    return action.gifyData;
  default:
    return state;
  }
}
