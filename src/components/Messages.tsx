import React, { useEffect, useRef } from 'react';
import { Paper, Typography, makeStyles, withStyles } from '@material-ui/core/';
import { Message } from '../redux/types';

interface Props {
  messages: Message[];
  username: string;
}

const useStyles = makeStyles(() => ({
  chat: {
    maxHeight: 'calc(100vh - 110px)',
    overflow: 'scroll',
    paddingBottom: '50',
  },

  name: {
    color: '#000000',
    paddingRight: '0.5em',
  },

  paper: {
    padding: '0.5em',
    width: 'auto',
    borderRadius: 10,
  },

  backgroundLight: {
    backgroundColor: '#7986cb',
  },

  backgroundDarker: {
    backgroundColor: '#3949ab',
  },

  chatContainer: {
    display: 'flex',
    flex: 1,
  },

  right: {
    justifyContent: 'flex-end',
    textAlign: 'right',
  },

  left: {
    justifyContent: 'flex-start',
  },

  center: {
    justifyContent: 'center',
  },

  border: {
    maxWidth: '60%',
    display: 'flex',
    flexDirection: 'column',
    wordBreak: 'break-all',
    padding: '0.3em',
  },
}));

const WhiteTextTypography = withStyles({
  root: {
    color: '#FFFFFF',
  },
})(Typography);

export default function Messages({
  messages,
  username,
}: Props): React.ReactElement {
  const classes = useStyles();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current !== null) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className={classes.chat}>
      {messages.map((el, index) => {
        if (el.author === 'System') {
          return (
            <div
              key={index}
              className={`${classes.chatContainer} ${classes.center}`}
            >
              <Typography variant="caption" className="name">
                {el.message}
              </Typography>
            </div>
          );
        }

        return (
          <div
            key={index}
            className={`${classes.chatContainer} ${
              el.author === username ? classes.right : classes.left
            }`}
          >
            <div className={classes.border}>
              <Typography
                variant="caption"
                className="name"
                color="textSecondary"
              >
                {el.author === username ? 'You' : el.author}
              </Typography>
              <Paper
                elevation={2}
                className={`${classes.paper} ${
                  el.author === username
                    ? classes.backgroundDarker
                    : classes.backgroundLight
                } `}
              >
                <WhiteTextTypography variant="body1">
                  {el.message}
                </WhiteTextTypography>
              </Paper>
            </div>
          </div>
        );
      })}
      <div ref={messagesEndRef} />
    </div>
  );
}
