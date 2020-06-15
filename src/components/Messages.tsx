import React, { useEffect, useRef, ReactElement } from 'react';
import { Paper, Typography, makeStyles, withStyles } from '@material-ui/core/';
import { Message } from '../redux/types';

const useStyles = makeStyles((theme) => ({
  chat: {
    maxHeight: 'calc(100vh - 140px)',
    overflow: 'hidden',
    width: '100%',
    height: '100%',
    flexGrow: 1,
  },

  name: {
    color: '#000000',
    paddingRight: '0.5em',
  },

  bubble: {
    width: 'auto',
    padding: '7px 13px 7px 13px',
  },

  bubbleLeft: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: '20px 20px 20px 3px',
  },

  bubbleRight: {
    backgroundColor: '#ffffff',
    borderRadius: '20px 20px 3px 20px',
  },

  chatDiv: {
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

  chatContainer: {
    maxWidth: '60%',
    display: 'flex',
    flexDirection: 'column',
    wordBreak: 'break-all',
    padding: '0.3em',
  },

  chatWindow: {
    height: '60vh',
    overflowY: 'auto',
    backgroundColor: 'white',
    scrollbarWidth: 'none',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
}));

const WhiteTextTypography = withStyles({
  root: {
    color: '#FFFFFF',
  },
})(Typography);

interface Props {
  messages: Message[];
  username: string;
}

export default function Messages({ messages, username }: Props): ReactElement {
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
      {messages.map((el, i, arr) => {
        if (el.author === 'System') {
          return (
            <div key={i} className={`${classes.chatDiv} ${classes.center}`}>
              <Typography variant="caption" className="name">
                {`${el.content} @ ${el.timeStamp}`}
              </Typography>
            </div>
          );
        }
        if (el.author === username) {
          return (
            <div key={i} className={`${classes.chatDiv} ${classes.right}`}>
              <div className={classes.chatContainer}>
                <Paper
                  elevation={2}
                  className={`${classes.bubble} ${classes.bubbleRight}`}
                >
                  <Typography variant="body1">{el.content}</Typography>
                </Paper>
                <Typography
                  variant="caption"
                  className="name"
                  color="textSecondary"
                >
                  {i === arr.length - 1 && arr[i].author === el.author
                    ? el.timeStamp
                    : null}
                </Typography>
              </div>
            </div>
          );
        }
        return (
          <div key={i} className={`${classes.chatDiv} ${classes.left}`}>
            <div className={classes.chatContainer}>
              <Typography
                variant="caption"
                className="name"
                color="textSecondary"
              >
                {arr[i - 1].author !== el.author ? el.author : null}
              </Typography>
              <Paper
                elevation={2}
                className={`${classes.bubble} ${classes.bubbleLeft}`}
              >
                <WhiteTextTypography variant="body1">
                  {el.content}
                </WhiteTextTypography>
              </Paper>
              <Typography
                variant="caption"
                className="name"
                color="textSecondary"
              >
                {i === arr.length - 1 && arr[i].author === el.author
                  ? el.timeStamp
                  : null}{' '}
              </Typography>
            </div>
          </div>
        );
      })}
      <div ref={messagesEndRef} />
    </div>
  );
}
