import { combineReducers } from 'redux';
import categories from './CatReducer';
import data from './PostReducer';

export default combineReducers({
  categories,
  data
})
