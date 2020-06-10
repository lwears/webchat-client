import React from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';
import Landing from './views/Landing';
import Chat from './views/Chat';
import './App.css';

function App(): React.ReactElement {
  const loggedIn = useSelector(
    (state: RootStateOrAny) => state.chatReducer.user.loggedIn
  );
  console.log(loggedIn);

  return <div className="App">{loggedIn ? <Chat /> : <Landing />}</div>;
}

export default App;
