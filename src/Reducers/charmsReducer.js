const charmsState = {
  charmData: [],
  loading: false
};

export default (state = charmsState, action) => {
  switch (action.type) {
    case 'GET_CHARMS':
      return { ...state, charmData: action.payload, loading: false };
    case 'LOADING':
      return { ...state, loading: true };
    default:
      return state;
  }
};
