import { ChatEvent } from '../constants';
import { Message, ChatActionTypes, User, ChatUser } from '../types';

export const addMessage = (newMessage: Message): ChatActionTypes => ({
  type: ChatEvent.ADD_MESSAGE,
  payload: newMessage,
});

export const login = (user: User): ChatActionTypes => ({
  type: ChatEvent.LOGIN,
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

export const clearError = (): ChatActionTypes => ({
  type: ChatEvent.CLEAR_ERROR,
});

export const logoutUser = (): ChatActionTypes => ({
  type: ChatEvent.LOGOUT,
});
