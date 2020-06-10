import { ChatEvent } from './constants';

export interface Message {
  user: User;
  message: string;
}

export interface User {
  loggedIn: boolean;
  id: number;
  name: string;
}

export interface ChatState {
  messages: Array<Message>;
  users: Array<User>;
  user: Partial<User>;
}

export interface UserState {
  users: Array<string>;
}

interface addUserAction {
  type: ChatEvent.ADD_USER;
  payload: User;
}

interface userListAction {
  type: ChatEvent.USERS_LIST;
  payload: User[];
}

interface addMessageAction {
  type: ChatEvent.ADD_MESSAGE;
  payload: Message;
}

export type ChatActionTypes = addUserAction | userListAction | addMessageAction;
