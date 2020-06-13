import React from 'react';
import { Paper, Typography, makeStyles } from '@material-ui/core/';
import { Message } from '../redux/types';

interface Props {
  messages: Message[];
  username: string;
}

const useStyles = makeStyles((theme) => ({
  body: {
    background: '#f5f5f5',
    padding: '16px',
  },

  chat: {
    maxHeight: 'calc(100vh - 128px)',
    overflow: 'scroll',
    padding: '10px',
  },

  name: {
    color: 'rgba(0, 0, 0, 0.54)',
    width: 'auto',
  },

  content: {
    marginBottom: '8px',
    width: 'auto',
  },
  paper: {
    margin: '10px',
    padding: '10px',
    maxWidth: '50%',
    width: 'auto',
  },

  container: {
    display: 'inline-block',
  },

  system: {
    margin: 'auto',
    textAlign: 'center',
  },

  currentUser: {
    textAlign: 'right',
  },
}));

export default function Messages({
  messages,
  username,
}: Props): React.ReactElement {
  const classes = useStyles();

  return (
    <div id="chat">
      {messages.map((el, index) => {
        const containerClasses =
          el.username === 'System'
            ? 'container system'
            : el.username === username
            ? 'container current-user'
            : 'container';

        const paperClasses =
          el.username === 'System'
            ? 'paper system'
            : el.username === username
            ? 'paper current-user'
            : 'paper';
        return (
          <div key={index} className={containerClasses}>
            <Paper elevation={3} className={paperClasses}>
              <Typography variant="caption" className="name">
                {el.username}
              </Typography>
              <Typography variant="body1" className="content">
                {el.message}
              </Typography>
            </Paper>
          </div>
        );
      })}
    </div>
  );
}
