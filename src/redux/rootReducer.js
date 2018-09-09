import { combineReducers } from 'redux';
import entity1 from './ducks/entity1/reducer';
import common from './ducks/common/reducer';

export default combineReducers({
  common,
  entity1
});
