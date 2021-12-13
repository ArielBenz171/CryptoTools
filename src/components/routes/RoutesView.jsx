import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AllPlayersContainer } from '../containers';
import { Home, Ciphers, NT, Algorithms, Others, cCipher} from '../views';

const RoutesView = () => {
  return (
    <Switch>
      <Route exact path = "/c" component = {AllPlayersContainer} />
      <Route exact path = "/" component = {Home} />
      <Route exact path = "/ciphers" component = {Ciphers} />
      <Route exact path = "/nt" component = {NT} />
      <Route exact path = "/algorithms" component = {Algorithms} />
      <Route exact path = "/others" component = {Others} />
      <Route exact path = "/cCipher" component = {cCipher} />
    </Switch>
  )
}

export default RoutesView;
