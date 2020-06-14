import { combineReducers } from 'redux';
import chatReducer from './chatReducer';

const chat = combineReducers({
  chat: chatReducer,
});

export default chat;
