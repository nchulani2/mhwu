export default (state = [], action) => {
  switch (action.type) {
    case 'GET_SMALL':
      return action.payload;
    case 'GET_LARGE':
      return action.payload;
    default:
      return state;
  }
};
