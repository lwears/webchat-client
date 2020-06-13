import React, { useContext, useEffect } from 'react';
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

  const scrollToBottom = () => {
    const chat = document.getElementById('chat');
    if (chat) {
      chat.scrollTop = chat.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = (message: string) => {
    if (ws && username) {
      ws.sendMessage({
        username,
        message,
      });
    }
  };

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>,
    message: string
  ) => {
    event.preventDefault();
    console.log('test', message);

    if (message) sendMessage(message);
  };

  const handleLogOff = () => {
    if (ws) {
      ws.logout();
    }
  };

  return (
    <div>
      <CssBaseline />
      <Messages messages={messages} username={username || ''} />
      <BottomBar handleSubmit={handleSubmit} handleLogoff={handleLogOff} />
    </div>
  );
}

export default Chat;
