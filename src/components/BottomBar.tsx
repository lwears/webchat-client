import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { InputBase, Button, Toolbar, Box } from '@material-ui/core';

import ChatIcon from '@material-ui/icons/Chat';

const useStyles = makeStyles((theme) => ({
  appBar: {
    bottom: 0,
    top: 'auto',
    backgroundColor: '#eeeeee',
  },

  inputContainer: {
    backgroundColor: '#ffffff',
    borderRadius: theme.shape.borderRadius,
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },

  icon: {
    alignSelf: 'center',
    justifySelf: 'center',
    flexGrow: 0.5,
  },

  iconContainer: {
    display: 'flex',
    padding: theme.spacing(0, 2),
    height: '100%',
  },

  inputRoot: {
    flexGrow: 1,
  },

  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    transition: theme.transitions.create('width'),
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
                flexGrow={1}
                alignItems="center"
                className={classes.inputContainer}
              >
                <div className={classes.iconContainer}>
                  <ChatIcon style={{ color: '#6374fb' }} />
                </div>
                <InputBase
                  fullWidth
                  autoFocus
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
              <Button type="submit" variant="contained" color="primary">
                Send
              </Button>
            </form>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
