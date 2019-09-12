const skillsState = {
  skillData: [],
  loading: false
};

export default (state = skillsState, action) => {
  switch (action.type) {
    case 'GET_SKILLS':
      return { ...state, skillData: action.payload, loading: false };
    case 'GET_SPEC_SKILL':
      return { ...state, skillData: [action.payload], loading: false };
    case 'LOADING':
      return { ...state, loading: true };

    default:
      return state;
  }
};
