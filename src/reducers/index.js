import { combineReducers } from 'redux';
import storyReducer from './storyReducer';
import commentReducer from './commentReducer'

export default combineReducers({
  storyReducer,
  commentReducer
})
