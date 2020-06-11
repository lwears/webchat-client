import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { WebSocketContext } from '../WebSocket';
import BottomBar from '../components/BottomBar';
import './Chat.css';
import { RootState } from '../redux/types';

function Chat(): React.ReactElement {
  const { username } = useSelector((s: RootState) => s.chatReducer.user);
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

  return (
    <div className="App">
      <Paper id="chat" elevation={3}>
        <div>
          <Typography variant="caption" className="name">
            Testing
          </Typography>
          <Typography variant="body1" className="content">
            Testing
          </Typography>
        </div>
      </Paper>
      <BottomBar handleSubmit={handleSubmit} />
    </div>
  );
}

export default Chat;
