import { combineReducers } from 'redux';
import monstersReducer from './monstersReducer';
import skillsReducer from './skillsReducer';
import charmsReducer from './charmsReducer';
import armorReducer from './armorReducer';

export default combineReducers({
  data: monstersReducer,
  skills: skillsReducer,
  charms: charmsReducer,
  armors: armorReducer
});
