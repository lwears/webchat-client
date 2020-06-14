import React from 'react';
import {
  CssBaseline,
  Grid,
  Paper,
  makeStyles,
  Hidden,
  InputBase,
  Button,
  Toolbar,
  Box,
  AppBar,
  Typography,
} from '@material-ui/core/';
import ChatIcon from '@material-ui/icons/Chat';
import BottomBar from '../components/BottomBar';
import Messages from '../components/Messages';
import SideBar from '../components/SideBar';
import { RootState } from '../redux/types';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  color: {
    flexGrow: 1,
  },
  paper: {
    backgroundColor: '#e8eaf6',
    height: '100vh',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
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
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    width: '100%',
  },

  appBar: {
    bottom: 0,
    top: 'auto',
    backgroundColor: '#eeeeee',
  },

  position: {
    position: 'fixed',
    bottom: '0',
    width: '100%',
  },

  fullWidth: {
    width: '100%',
  },
}));

function ChatTest(): React.ReactElement {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Grid container direction="row" className={classes.root}>
        <Hidden xsDown>
          <Grid item sm={3}>
            <Paper className={classes.paper}>
              <h1>Left</h1>
            </Paper>
          </Grid>
        </Hidden>
        <Grid item xs={12} sm={9}>
          <Paper className={classes.paper}>
            <AppBar position="static" color="primary">
              <Toolbar>
                <Typography variant="h6" color="inherit">
                  Default channel
                </Typography>
              </Toolbar>
            </AppBar>
            <Box display="flex" flexGrow={1} className={classes.fullWidth}>
              <form className={classes.form}>
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
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default ChatTest;
