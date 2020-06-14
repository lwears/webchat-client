import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/';
import Landing from './views/Landing';
import Chat from './views/Chat';
import { RootState } from './redux/types';

const useStyles = makeStyles(() => ({
  app: {
    background: '#f5f5f5',
    padding: '1em',
    height: '100vh',
  },
}));

function App(): React.ReactElement {
  const classes = useStyles();
  const { loggedIn } = useSelector(
    (state: RootState) => state.chatReducer.user
  );

  return <div className={classes.app}>{loggedIn ? <Chat /> : <Landing />}</div>;
}

export default App;
