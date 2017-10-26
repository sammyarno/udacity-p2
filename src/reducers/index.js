import { combineReducers } from 'redux';
import categories from './CatReducer';
import data from './PostReducer';
import menu from './MenuReducer';

export default combineReducers({
  menu,
  categories,
  data
})
