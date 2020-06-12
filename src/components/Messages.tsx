import React from 'react';
import { Paper, Typography, Divider } from '@material-ui/core/';
import { Message } from '../redux/types';

interface Props {
  messages: Message[];
}

export default function Messages({ messages }: Props) {
  return (
    <div>
      <Paper id="chat" elevation={3}>
        {messages.map((el, index) => {
          return (
            <div key={index}>
              <Typography variant="caption" className="name">
                {el.username}
              </Typography>
              <Typography variant="body1" className="content">
                {el.message}
              </Typography>
              <Divider />
            </div>
          );
        })}
      </Paper>
    </div>
  );
}
