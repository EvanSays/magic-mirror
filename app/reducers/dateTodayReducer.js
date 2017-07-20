export const setDateTodayData = (state = [], action) => {
  switch (action.type) {
  case 'DATE_TODAY_DATA' :
    return action.dateTodayData;
  default:
    return state;
  }
}
