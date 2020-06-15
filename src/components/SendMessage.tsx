import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { InputBase, IconButton, Box } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import ChatIcon from '@material-ui/icons/Chat';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  inputContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 50,
    marginLeft: theme.spacing(1),
  },

  iconContainer: {
    display: 'flex',
    padding: theme.spacing(0, 2),
    height: '100%',
  },

  inputRoot: {
    flexGrow: 1,
    padding: theme.spacing(0.5),
  },

  inputInput: {
    transition: theme.transitions.create('width'),
  },

  form: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    width: '100%',
  },
}));

interface SendMessageProps {
  handleSubmit: (
    event: React.FormEvent<HTMLFormElement>,
    message: string
  ) => void;
}

export default function SendMessage(
  props: SendMessageProps
): React.ReactElement {
  const classes = useStyles();
  const [message, setMessage] = useState<string>('');
  const { handleSubmit } = props;

  return (
    <Box display="flex">
      <form
        onSubmit={(e) => {
          handleSubmit(e, message);
          setMessage('');
        }}
        className={classes.form}
      >
        <Box
          display="flex"
          flexGrow={1}
          alignItems="center"
          className={classes.inputContainer}
          boxShadow={1}
        >
          <div className={classes.iconContainer}>
            <ChatIcon style={{ color: '#6374fb' }} />
          </div>
          <InputBase
            fullWidth
            autoFocus
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'content' }}
          />
        </Box>
        <IconButton type="submit" color="primary">
          <SendIcon />
        </IconButton>
      </form>
    </Box>
  );
}
