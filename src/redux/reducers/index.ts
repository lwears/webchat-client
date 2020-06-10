import { combineReducers } from 'redux';
import chatReducer from './messages';

const chat = combineReducers({
  chatReducer,
});

export default chat;
