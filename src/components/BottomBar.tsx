import React, { useState } from 'react';

import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import InputBase from '@material-ui/core/InputBase';
import Toolbar from '@material-ui/core/Toolbar';

import ChatIcon from '@material-ui/icons/Chat';
import FaceIcon from '@material-ui/icons/Face';

const useStyles = makeStyles((theme) => ({
  appBar: {
    bottom: 0,
    top: 'auto',
  },
  inputContainer: {
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    marginLeft: theme.spacing(1),
    position: 'relative',
    width: '100%',
  },
  icon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    width: '100%',
  },
}));

interface BottomBarProps {
  handleSubmit: (
    event: React.FormEvent<HTMLFormElement>,
    message: string
  ) => void;
}

export default function BottomBar(props: BottomBarProps): React.ReactElement {
  const classes = useStyles();
  const [message, setMessage] = useState<string>('');
  const { handleSubmit } = props;

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <div className={classes.inputContainer} style={{ maxWidth: '200px' }}>
          <div className={classes.icon}>
            <FaceIcon />
          </div>
        </div>
        <div className={classes.inputContainer}>
          <form
            onSubmit={(e) => {
              handleSubmit(e, message);
              setMessage('');
            }}
          >
            <div className={classes.icon}>
              <ChatIcon />
            </div>
            <InputBase
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'content' }}
            />
          </form>
        </div>
      </Toolbar>
    </AppBar>
  );
}
