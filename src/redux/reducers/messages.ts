import { ChatEvent } from '../constants';
import { ChatState, ChatActionTypes } from '../types';

const initialState: ChatState = {
  users: [],
  user: {
    loggedIn: false,
  },
  messages: [],
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
    // case ChatEvent.USERS_LIST:
    //   return action.user;
    default:
      return state;
  }
};

export default chatReducer;
