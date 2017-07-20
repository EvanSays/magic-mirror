export const setNewsData = (state = [], action) => {
  switch (action.type) {
  case 'NEWS_DATA' :
    return action.newsData;
  default:
    return state;
  }
}
