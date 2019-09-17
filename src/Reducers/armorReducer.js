const initialState = {
  armorData: [],
  lowRank: false,
  highRank: true,
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_HIGH_ARMOR_SETS':
      return {
        ...state,
        armorData: action.payload,
        lowRank: false,
        highRank: true,
        loading: false
      };
    case 'GET_LOW_ARMOR_SETS':
      return {
        ...state,
        armorData: action.payload,
        lowRank: true,
        highRank: false,
        loading: false
      };
    case 'GET_SPEC_ARMOR_SET':
      return { ...state, armorData: [action.payload], loading: false };
    case 'LOADING':
      return { ...state, loading: true };
    default:
      return state;
  }
};
