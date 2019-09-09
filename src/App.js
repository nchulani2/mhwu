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
        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/skills" component={Skills}></Route>
        <Route exact path="/monsters" component={Monsters}></Route>
        <Route path={`/monsters/:monsterId`} component={Monster}></Route>
        <Route path="/armor" component={Armor}></Route>
        <Route component={Error}></Route>
      </Switch>
      <Nav />
    </div>
  );
};

export default withRouter(App);
