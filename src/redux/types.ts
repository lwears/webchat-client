import { ChatEvent } from './constants';

export interface Message {
  username: string;
  message: string;
}

export interface User {
  loggedIn: boolean;
  id: string;
  username: string | undefined;
}

export interface InitialUser {
  loggedIn: boolean;
}

export type InitialChatState = {
  loginError: boolean;
  loginMessage: string;
  user: User;
  messages: Array<Message>;
};

export type UpdatedChatState = {
  messages: Array<Message>;
  users: Array<User>;
  user: User;
  loginError: boolean;
  loginMessage: string;
};

export type ChatState = InitialChatState | UpdatedChatState;

// export type ChatState =
//   | {
//       kind: 'loggingIn';
//       loginError: boolean;
//       loginMessage: string;
//       user: InitialUser;
//     }
//   | {
//       kind: 'loggedIn';
//       messages: Array<Message>;
//       users: Array<User>;
//       user: User;
//     };

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
  type: ChatEvent.USERS_LIST;
  payload: User[];
}

interface addMessageAction {
  type: ChatEvent.ADD_MESSAGE;
  payload: Message;
}

interface loginErrorAction {
  type: ChatEvent.LOGIN_ERROR;
  payload: string;
}

export type ChatActionTypes =
  | addUserAction
  | userListAction
  | addMessageAction
  | loginErrorAction;
