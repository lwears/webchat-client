import { ChatEvent } from '../constants';
import { Message, ChatActionTypes, User } from '../types';

export const addMessage = (newMessage: Message): ChatActionTypes => ({
  type: ChatEvent.ADD_MESSAGE,
  payload: newMessage,
});

export const addUser = (user: User): ChatActionTypes => ({
  type: ChatEvent.ADD_USER,
  payload: user,
});

export const populateUsersList = (users: Array<User>): ChatActionTypes => ({
  type: ChatEvent.USERS_LIST,
  payload: users,
});

// export const messageReceived = (message, author) => ({
//   type: ChatEvent.MESSAGE_RECEIVED,
//   message,
//   author,
// });
