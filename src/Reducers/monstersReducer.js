const monsterState = {
  monsterData: [],
  largeActive: true,
  smallActive: false,
  loading: false
};

export default (state = monsterState, action) => {
  switch (action.type) {
    case 'GET_SMALL':
      return {
        ...state,
        monsterData: action.payload,
        largeActive: false,
        smallActive: true,
        loading: false
      };
    case 'GET_LARGE':
      return {
        ...state,
        monsterData: action.payload,
        largeActive: true,
        smallActive: false,
        loading: false
      };
    case 'GET_SPEC':
      return {
        ...state,
        monsterData: [action.payload],
        loading: false
      };
    // loading reducer behaves as a reset for the state
    case 'LOADING':
      return {
        ...state,
        monsterData: [],
        loading: true
      };
    default:
      return state;
  }
};
