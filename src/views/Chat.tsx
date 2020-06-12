import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { CssBaseline } from '@material-ui/core/';
import { WebSocketContext } from '../WebSocket';
import BottomBar from '../components/BottomBar';
import Messages from '../components/Messages';
import './Chat.css';
import { RootState } from '../redux/types';

function Chat(): React.ReactElement {
  const { username } = useSelector((s: RootState) => s.chatReducer.user);
  const { messages } = useSelector((s: RootState) => s.chatReducer);
  const ws = useContext(WebSocketContext);

  const sendMessage = (message: string) => {
    if (ws && username) {
      ws.sendMessage({
        username,
        message,
      });
    }
  };

  const scrollToBottom = () => {
    const chat = document.getElementById('chat');
    if (chat) {
      chat.scrollTop = chat.scrollHeight;
    }
  };

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>,
    message: string
  ) => {
    // console.log(message);
    event.preventDefault();
    sendMessage(message);
    // socket.emit('message', message);
  };

  const handleLogOff = () => {
    if (ws) {
      ws.logout();
    }
  };

  return (
    <div>
      <CssBaseline />
      <Messages messages={messages} />
      <BottomBar handleSubmit={handleSubmit} handleLogoff={handleLogOff} />
    </div>
  );
}

export default Chat;
