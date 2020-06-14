import { ChatEvent } from './constants';

export interface Message {
  author: string;
  message: string;
}

export interface User {
  loggedIn: boolean;
  id: string;
  username: string | undefined;
}

export type ChatUser = Omit<User, 'loggedIn'>;

export type InitialChatState = {
  loginError: boolean;
  errorMessage: string;
  user: User;
  messages: Array<Message>;
};

export type UpdatedChatState = {
  messages: Array<Message>;
  users: Array<ChatUser>;
  user: User;
  loginError: boolean;
  errorMessage: string;
};

export type ChatState = InitialChatState | UpdatedChatState;

export interface RootState {
  chatReducer: ChatState;
}

export interface UserState {
  users: Array<string>;
}

interface addUserAction {
  type: ChatEvent.ADD_USER;
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
