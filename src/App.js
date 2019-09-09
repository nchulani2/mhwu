import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Nav from './Components/Nav';

import Home from './Pages/Home';
import About from './Pages/About';
import Skills from './Pages/Skills';
import Monsters from './Pages/Monsters';
import Monster from './Pages/Monster';
import Armor from './Pages/Armor';
import Error from './Pages/Error';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={withRouter(Home)}></Route>
        <Route path="/about" component={withRouter(About)}></Route>
        <Route path="/skills" component={withRouter(Skills)}></Route>
        <Route exact path="/monsters" component={withRouter(Monsters)}></Route>
        <Route
          path={`/monsters/:monsterId`}
          component={withRouter(Monster)}></Route>
        <Route path="/armor" component={withRouter(Armor)}></Route>
        <Route component={withRouter(Error)}></Route>
      </Switch>
      <Nav />
    </div>
  );
};

export default App;
