import React, { ReactElement, useRef, useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ChatRoundedIcon from '@material-ui/icons/ChatRounded';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { clearError } from '../redux/actions/index';

import { RootState } from '../redux/types';
import { WebSocketContext } from '../WebSocket';

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    padding: '10px',
  },
}));

export default function Landing(): ReactElement {
  const [validationError, setValidationError] = useState<string>('');
  const classes = useStyles();
  const usernameRef = useRef<HTMLInputElement>(null);
  const ws = useContext(WebSocketContext);
  const dispatch = useDispatch();
  const { chat } = useSelector((s: RootState) => s);
  const { loginError, errorMessage } = chat;

  const login = (username: string) => {
    if (ws) {
      ws.sendLoginRequest(username);
    }
  };

  const handleSubmit = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    if (usernameRef.current) {
      login(usernameRef.current.value);
    }
  };

  const usernameValidator = (username: string): void => {
    dispatch(clearError());
    setValidationError('');
    if (!/^\w{4,12}$/.test(username)) {
      setValidationError(
        'Username must be between 4-12 letters and contain no special characters'
      );
    }
  };

  return (
    <Container className={classes.container} component="main" maxWidth="xs">
      <Avatar className={classes.avatar}>
        <ChatRoundedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Chat
      </Typography>
      <form className={classes.form} noValidate>
        <TextField
          error={loginError || Boolean(validationError)}
          helperText={errorMessage || validationError}
          inputRef={usernameRef}
          onChange={(e) => usernameValidator(e.target.value)}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          name="username"
          autoComplete="off"
          autoFocus
        />
        <Button
          disabled={Boolean(validationError)}
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={handleSubmit}
        >
          Sign In
        </Button>
      </form>
    </Container>
  );
}
