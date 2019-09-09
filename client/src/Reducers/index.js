import { combineReducers } from 'redux';
import monstersReducer from './monstersReducer';
import skillsReducer from './skillsReducer';

export default combineReducers({
  data: monstersReducer,
  skills: skillsReducer
});
