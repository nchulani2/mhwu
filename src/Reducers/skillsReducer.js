const skillsState = {
  skillData: [],
  loading: false
};

export default (state = skillsState, action) => {
  switch (action.type) {
    case 'GET_SKILLS':
      return { ...state, skillData: action.payload, loading: false };
    case 'LOADING':
      return { ...state, skillData: [], loading: true };
    default:
      return state;
  }
};
