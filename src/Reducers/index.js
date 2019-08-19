import { combineReducers } from 'redux';
import monstersReducer from './monstersReducer';

export default combineReducers({
  monsters: monstersReducer
});
