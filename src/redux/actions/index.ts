import { ChatEvent } from '../constants';
import { Message, ChatActionTypes, User, ChatUser } from '../types';

export const addMessage = (newMessage: Message): ChatActionTypes => ({
  type: ChatEvent.ADD_MESSAGE,
  payload: newMessage,
});

export const addUser = (user: User): ChatActionTypes => ({
  type: ChatEvent.ADD_USER,
  payload: user,
});

export const populateUsersList = (users: Array<ChatUser>): ChatActionTypes => ({
  type: ChatEvent.UPDATE_USERS,
  payload: users,
});

export const loginError = (payload: string): ChatActionTypes => ({
  type: ChatEvent.LOGIN_ERROR,
  payload,
});

export const logoutUser = (): ChatActionTypes => ({
  type: ChatEvent.LOGOUT,
});

// export const messageReceived = (message, author) => ({
//   type: ChatEvent.MESSAGE_RECEIVED,
//   message,
//   author,
// });
