import React, { useState } from 'react';

import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { InputBase, Button, Toolbar, Box, TextField } from '@material-ui/core';

import ChatIcon from '@material-ui/icons/Chat';

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
    marginRight: theme.spacing(1),
  },
  icon: {
    alignSelf: 'flex-end',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  form: {
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

interface BottomBarProps {
  handleSubmit: (
    event: React.FormEvent<HTMLFormElement>,
    message: string
  ) => void;
  handleLogoff: () => void;
}

export default function BottomBar(props: BottomBarProps): React.ReactElement {
  const classes = useStyles();
  const [message, setMessage] = useState<string>('');
  const { handleSubmit, handleLogoff } = props;

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Box display="flex" flexDirection="row" flexWrap="nowrap" flexGrow={1}>
          <Box>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              classes={{
                root: classes.inputRoot,
              }}
              onClick={handleLogoff}
            >
              Logout
            </Button>
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            flexGrow={1}
            flexWrap="nowrap"
            alignItems="center"
          >
            <form
              onSubmit={(e) => {
                handleSubmit(e, message);
                setMessage('');
              }}
              className={classes.form}
            >
              <Box
                display="flex"
                flexDirection="row"
                flexGrow={1}
                alignItems="center"
                alignContent="flex-start"
                justifyContent="center"
                className={classes.inputContainer}
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
              </Box>
              <Button
                variant="contained"
                color="primary"
                classes={{
                  root: classes.inputRoot,
                }}
              >
                Send
              </Button>
            </form>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
