import React, { ReactElement, useRef, useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { clearError } from '../redux/actions/index';

import { RootState } from '../redux/types';
import { WebSocketContext } from '../WebSocket';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Landing(): ReactElement {
  const [validationError, setValidationError] = useState<string>('');
  const classes = useStyles();
  const usernameRef = useRef<HTMLInputElement>(null);
  const ws = useContext(WebSocketContext);
  const dispatch = useDispatch();
  const { chatReducer } = useSelector((s: RootState) => s);
  const { loginError, loginMessage } = chatReducer;

  const login = (username: string) => {
    if (ws) {
      ws.login(username);
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
    if (username.length < 3 || username.length > 12) {
      setValidationError('Username too short or too long');
    }
    if (!/^\w+$/.test(username)) {
      setValidationError(
        'userame can only contain letters, numbers and underscore'
      );
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            error={loginError || Boolean(validationError)}
            helperText={loginMessage || validationError}
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
      </div>
    </Container>
  );
}
