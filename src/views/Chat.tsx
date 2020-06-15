import React, { useContext } from 'react';
import { CssBaseline, Grid, makeStyles, Hidden, Box } from '@material-ui/core/';
import { useSelector } from 'react-redux';
import { WebSocketContext } from '../WebSocket';
import Messages from '../components/Messages';
import SendMessage from '../components/SendMessage';
import TopBarChat from '../components/TopBarChat';
import SideBar from '../components/SideBar';
import TopBarUsers from '../components/TopBarUsers';

import { RootState } from '../redux/types';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },

  chatWindow: {
    backgroundColor: '#efeef1',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },

  chatContainer: {
    width: '100%',
    padding: '1em',
  },
}));

function Chat(): React.ReactElement {
  const classes = useStyles();
  const { username } = useSelector((s: RootState) => s.chat.user);
  const { messages } = useSelector((s: RootState) => s.chat);
  const { users } = useSelector((s: RootState) => s.chat);
  const ws = useContext(WebSocketContext);

  const sendMessage = (msg: string) => {
    if (ws) {
      ws.sendMessage(msg);
    }
  };

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>,
    msg: string
  ) => {
    event.preventDefault();
    if (msg) sendMessage(msg);
  };

  const handleLogOff = () => {
    if (ws) {
      ws.logout();
    }
  };

  return (
    <>
      <CssBaseline />
      <Grid container direction="row" className={classes.root}>
        <Hidden xsDown>
          <Grid item sm={3} xl={2}>
            <TopBarUsers />
            <SideBar users={users} />
          </Grid>
        </Hidden>
        <Grid item xs={12} sm={9} xl={10} className={classes.chatWindow}>
          <TopBarChat handleLogoff={handleLogOff} />
          <Box
            display="flex"
            flexDirection="column"
            flexGrow={1}
            className={classes.chatContainer}
          >
            <Messages messages={messages} username={username || ''} />
            <SendMessage handleSubmit={handleSubmit} />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Chat;
