import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import GlobalState from './context/GlobalState'
import Contact from './pages/Contact';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Skills from './pages/Skills';
import './App.scss';
import './sass/main.scss';

//put context in separate file, and then pass down that component (GlobalState), 
//then proceed to use the Consumer of the context BAU in each componenet

class App extends Component {
  render() {
    return (
      <Router>
        <GlobalState>
            <Switch location={this.props.location}>
              <Route exact path={'/'} component={Home} />
              <Route exact path={'/portfolio'} component={Portfolio} />
              <Route exact path={'/skills'} component={Skills} />
              <Route exact path={'/contact'} component={Contact} />
            </Switch>
        </GlobalState>
      </Router>
    );
  }
}

export default App;
