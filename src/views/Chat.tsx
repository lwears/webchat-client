import React, { useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './Chat.css';

import BottomBar from '../components/BottomBar';

const endpoint = 'http://localhost:3000';

function Chat(): React.ReactElement {
  const [content, setContent] = useState<string>('');
  const [name, setName] = useState<string>('');

  useEffect(() => {
    const socket = socketIOClient(endpoint);
  }, []);

  const handleContent = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };

  //
  const handleName = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setName(event.target.value);
  };

  const scrollToBottom = () => {
    const chat = document.getElementById('chat');
    if (chat) {
      chat.scrollTop = chat.scrollHeight;
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    console.log(event);
    event.preventDefault();
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
      <BottomBar
        content={content}
        handleContent={handleContent}
        handleName={handleName}
        handleSubmit={handleSubmit}
        name={name}
      />
    </div>
  );
}

export default Chat;
