import React, { createContext } from 'react';
import io from 'socket.io-client';
import { useDispatch } from 'react-redux';
import {
  addMessage,
  login,
  loginError,
  logoutUser,
  populateUsersList,
  clearError,
} from './redux/actions/index';
import { Message, User, ChatUser } from './redux/types';

type ContextProps = {
  socket: SocketIOClient.Socket;
  sendMessage: (message: string) => void;
  sendLoginRequest: (username: string) => void;
  logout: () => void;
};

export type DefaultValue = undefined;
export type ContextValue = DefaultValue | ContextProps;

const WebSocketContext = createContext<ContextValue>(undefined);

const endpoint =
  process.env.NODE_ENV === 'production'
    ? (process.env.REACT_APP_API_URL as string)
    : 'http://192.168.1.181:3000/';

export { WebSocketContext };

type Props = {
  children: React.ReactNode;
};
export default function WebSocketProvider({
  children,
}: Props): React.ReactElement {
  let socket: SocketIOClient.Socket | undefined;
  let ws;

  const dispatch = useDispatch();

  const sendMessage = (message: string) => {
    if (socket) {
      socket.emit('message', message);
    }
  };

  const sendLoginRequest = (username: string) => {
    if (socket) {
      socket.emit('new_user', username);
    }
  };

  const logout = () => {
    if (socket) {
      socket.emit('logout');
    }
    dispatch(logoutUser());
  };

  if (!socket) {
    socket = io.connect(endpoint);

    socket.on('connect_error', () => {
      dispatch(logoutUser());
      dispatch(loginError('Server Offline'));
    });

    socket.on('connect', () => {
      dispatch(clearError());
    });

    socket.on('broadcast_message', (msg: Message) => {
      dispatch(addMessage(msg));
    });

    socket.on('login_success', (user: User) => {
      dispatch(login(user));
    });

    socket.on('login_failure', (error: string) => {
      dispatch(loginError(error));
    });

    socket.on('user_disconnected', (msg: Message) => {
      dispatch(addMessage(msg));
    });

    socket.on('user_connected', (msg: Message) => {
      dispatch(addMessage(msg));
    });

    socket.on('user_logout', (msg: Message) => {
      dispatch(addMessage(msg));
    });

    socket.on('update_users', (users: ChatUser[]) => {
      dispatch(populateUsersList(users));
    });

    socket.on('logout', () => {
      dispatch(logoutUser());
    });

    ws = {
      socket,
      sendMessage,
      sendLoginRequest,
      logout,
    };
  }

  return (
    <WebSocketContext.Provider value={ws}>{children}</WebSocketContext.Provider>
  );
}
