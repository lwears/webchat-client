import React from 'react';
import { useSelector } from 'react-redux';
import Landing from './views/Landing';
import Chat from './views/Chat';
import './App.css';
import { RootState } from './redux/types';

function App(): React.ReactElement {
  const { loggedIn } = useSelector(
    (state: RootState) => state.chatReducer.user
  );

  return <div className="App">{loggedIn ? <Chat /> : <Landing />}</div>;
}

export default App;
