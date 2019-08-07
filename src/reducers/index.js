import { combineReducers } from 'redux';
import storyReducer from './storyReducer';
import userReducer from './userReducer';
import commentReducer from './commentReducer'

export default combineReducers({
  storyReducer,
  commentReducer
  // , userReducer
})
