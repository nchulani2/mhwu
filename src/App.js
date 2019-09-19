import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Nav from './Components/Nav';

import Home from './Pages/Home';
import About from './Pages/About';
import Skills from './Pages/Skills';
import Skill from './Pages/Skill';
import Monsters from './Pages/Monsters';
import Monster from './Pages/Monster';
import Armors from './Pages/Armors';
import Armor from './Pages/Armor';
import ArmorExact from './Pages/ArmorExact';
import ErrorPage from './Pages/ErrorPage';
import Charms from './Pages/Charms';
import Charm from './Pages/Charm';

const App = props => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/skills" component={Skills}></Route>
        <Route path="/skills/:skillId" component={Skill}></Route>
        <Route exact path="/monsters" component={Monsters}></Route>
        <Route path="/monsters/:monsterId" component={Monster}></Route>
        <Route exact path="/armors" component={Armors}></Route>
        <Route exact path="/armors/:armorId" component={Armor}></Route>
        <Route
          path="/armors/:armorId/:exactArmorId"
          component={ArmorExact}></Route>
        <Route exact path="/charms" component={Charms}></Route>
        <Route path="/charms/:charmId" component={Charm}></Route>
        <Route component={ErrorPage}></Route>
      </Switch>
      <Nav />
    </div>
  );
};

export default withRouter(App);
