import { combineReducers } from 'redux';
import monstersReducer from './monstersReducer';
import skillsReducer from './skillsReducer';
import charmsReducer from './charmsReducer';

export default combineReducers({
  data: monstersReducer,
  skills: skillsReducer,
  charms: charmsReducer
});
