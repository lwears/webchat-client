import React, { useContext, useEffect } from 'react';
import { CssBaseline } from '@material-ui/core/';
import { useSelector } from 'react-redux';
import { WebSocketContext } from '../WebSocket';
import BottomBar from '../components/BottomBar';
import Messages from '../components/Messages';
import { RootState } from '../redux/types';

function Chat(): React.ReactElement {
  const { username } = useSelector((s: RootState) => s.chat.user);
  const { messages } = useSelector((s: RootState) => s.chat);
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
        author: username,
        message,
      });
    }
  };

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>,
    message: string
  ) => {
    event.preventDefault();
    if (message) sendMessage(message);
  };

  const handleLogOff = () => {
    if (ws) {
      ws.logout();
    }
  };

  return (
    <>
      <CssBaseline />
      <Messages messages={messages} username={username || ''} />
      <BottomBar handleSubmit={handleSubmit} handleLogoff={handleLogOff} />
    </>
  );
}

export default Chat;
