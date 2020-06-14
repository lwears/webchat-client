import { ChatEvent } from '../constants';
import { ChatState, ChatActionTypes } from '../types';

const initialState: ChatState = {
  users: [],
  user: {
    username: '',
    id: '',
  },
  messages: [],
  loggedIn: false,
  loginError: false,
  errorMessage: '',
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
    case ChatEvent.LOGIN:
      return {
        ...state,
        user: action.payload,
        loggedIn: true,
      };
    case ChatEvent.LOGIN_ERROR:
      return {
        ...state,
        loginError: true,
        errorMessage: action.payload,
      };
    case ChatEvent.CLEAR_ERROR:
      return {
        ...state,
        loginError: false,
        errorMessage: '',
      };
    case ChatEvent.UPDATE_USERS:
      return {
        ...state,
        users: [...action.payload],
      };
    case ChatEvent.LOGOUT:
      return { ...initialState };
    default:
      return state;
  }
};

export default chatReducer;
