import { combineReducers } from 'redux';
import storyReducer from './storyReducer';
import userReducer from './userReducer'

export default combineReducers({
  storyReducer
  // , userReducer
})
