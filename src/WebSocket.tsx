import React, { createContext } from 'react';
import io from 'socket.io-client';
import { useDispatch } from 'react-redux';
import { addMessage, addUser, loginError } from './redux/actions/index';
import { Message, User } from './redux/types';

type ContextProps = {
  socket: SocketIOClient.Socket;
  sendMessage: (message: Message) => void;
  login: (username: string) => void;
};

export type DefaultValue = undefined;
export type ContextValue = DefaultValue | ContextProps;

const WebSocketContext = createContext<ContextValue>(undefined);

const endpoint = 'http://localhost:3000';

export { WebSocketContext };

type Props = {
  children: React.ReactNode;
};
export default function WebSocketProvider({ children }: Props) {
  let socket: SocketIOClient.Socket | undefined;
  let ws;

  const dispatch = useDispatch();

  const sendMessage = (message: Message) => {
    if (socket) {
      socket.emit('message', JSON.stringify(message));
    }
    dispatch(addMessage(message));
  };

  const login = (username: string) => {
    if (socket) {
      socket.emit('new_user', username);
    }
  };

  if (!socket) {
    socket = io.connect(endpoint);

    socket.on('broadcast_message', (msg: any) => {
      const payload = JSON.parse(msg);
      dispatch(addMessage(payload));
    });

    socket.on('login_success', (user: User) => {
      console.log(user);
      dispatch(addUser(user));
    });

    socket.on('login_failure', (error: string) => {
      console.log('test');
      dispatch(loginError(error));
    });

    ws = {
      socket,
      sendMessage,
      login,
    };
  }

  return (
    <WebSocketContext.Provider value={ws}>{children}</WebSocketContext.Provider>
  );
}
