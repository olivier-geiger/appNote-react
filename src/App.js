// Library
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Sidebar from './Components/Sidebar/Sidebar';
import MainArena from './Components/MainArea/MainArea';
import ListNotes from './Components/ListNotes/ListNotes';
import Settings from './Components/Settings/Settings';
import SignIn from './Components/AuthForm/SignIn';

function App() {
  return (
    <Router>
      <Sidebar />

      <Switch>
        <Route path='/' exact component={ListNotes} />
        <Route path='/edit' exact component={MainArena} />
        <Route path='/settings' exact component={Settings} />
        <Route path='/login' exact component={SignIn} />
      </Switch>
    </Router>
  );
}

export default App;
