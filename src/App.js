// Library
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// Components
import Sidebar from './Components/Sidebar/Sidebar';
import MainArena from './Components/MainArea/MainArea';
import ListNotes from './Components/ListNotes/ListNotes';

function App() {
  return (
    <Router>
      <Sidebar />

      <Switch>
        <Route path='/' exact component={ListNotes} />
        <Route path='/edit' exact component={MainArena} />
      </Switch>
    </Router>
  );
}

export default App;
