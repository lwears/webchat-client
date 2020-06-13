import { ChatEvent } from '../constants';
import { ChatState, ChatActionTypes } from '../types';

const initialState: ChatState = {
  users: [],
  user: {
    username: '',
    loggedIn: false,
    id: '',
  },
  messages: [],
  loginError: false,
  loginMessage: '',
};

const chatReducer = (
  state = initialState,
  action: ChatActionTypes
): ChatState => {
  switch (action.type) {
    case ChatEvent.ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    case ChatEvent.ADD_USER:
      return {
        ...state,
        user: action.payload,
      };
    case ChatEvent.LOGIN_ERROR:
      return {
        ...state,
        loginError: true,
        loginMessage: action.payload,
      };
    case ChatEvent.CLEAR_ERROR:
      return { ...initialState };
    case ChatEvent.UPDATE_USERS:
      return {
        ...state,
        users: [...state.users, ...action.payload],
      };
    case ChatEvent.LOGOUT:
      return { ...initialState };
    default:
      return state;
  }
};

export default chatReducer;
