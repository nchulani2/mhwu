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
    case 'GET_SPEC_CHARM':
      return { ...state, charmData: [action.payload], loading: false };
    default:
      return state;
  }
};
