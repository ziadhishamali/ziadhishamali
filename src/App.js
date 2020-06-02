import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './styles/Social.css';
import Home from './components/layout/Home';
import './styles/About.css';
import './styles/Skills.css';
import Portfolio from './components/layout/Portfolio';
import GoogleAnalytics from "./components/auth/GoogleAnalytics";

import './styles/App.css';
import Games from './components/layout/Games';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <GoogleAnalytics />
          <Route exact path='/' render={props =>
            <div className="App wrapper">
              <div className="home-wrapper">
                <Home {...props} />
              </div>
              <div className="wave-background-home"></div>
              {/*<div className="information-wrapper">
                <Information />
                <Skill />
              </div>*/}
              <Portfolio />
            </div>
          } />

          <Route path='/games' render={props => <Games {...props} />} />

          <Route path='/bookabook' component={() => { 
            window.location.href = 'https://bookabook.web.app'; 
            return null;
          }}/>

          <Route path='/theroom' component={() => { 
            window.location.href = 'https://theroom.web.app'; 
            return null;
          }}/>

          <Route path='/signalflowgraph' component={() => { 
            window.location.href = 'https://signalflowgraph.github.io/'; 
            return null;
          }}/>
      </BrowserRouter>
    )
  }
}

export default App;
