import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Accueil from './pages/Accueil';
import Appli from './pages/Appli';

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={Accueil}/>
          <Route path='/Appli' component={Appli}/>
        </Switch>
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;