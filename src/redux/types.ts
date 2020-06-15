import { ChatEvent } from './constants';

export interface Message {
  author: string;
  content: string;
  timeStamp: string;
}

export interface User {
  id: string;
  username: string | undefined;
}

export type ChatUser = Omit<User, 'loggedIn'>;

export type ChatState = {
  loggedIn: boolean;
  loginError: boolean;
  errorMessage: string;
  user: User;
  users: Array<ChatUser>;
  messages: Array<Message>;
};

export interface RootState {
  chat: ChatState;
}

export interface UserState {
  users: Array<string>;
}

interface addUserAction {
  type: ChatEvent.LOGIN;
  payload: User;
}

interface userListAction {
  type: ChatEvent.UPDATE_USERS;
  payload: ChatUser[];
}

interface addMessageAction {
  type: ChatEvent.ADD_MESSAGE;
  payload: Message;
}

interface loginErrorAction {
  type: ChatEvent.LOGIN_ERROR;
  payload: string;
}

interface logoutAction {
  type: ChatEvent.LOGOUT;
}

interface clearErrorAction {
  type: ChatEvent.CLEAR_ERROR;
}

export type ChatActionTypes =
  | addUserAction
  | userListAction
  | addMessageAction
  | loginErrorAction
  | logoutAction
  | clearErrorAction;
