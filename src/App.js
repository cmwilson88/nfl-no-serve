import React, { Component } from 'react';
import NflList from './components/NflList/NflList'
import Team from './components/Team/Team';
import Player from './components/Player/Player';

import {Route, Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="site_header">
          <Link to="/">
            <div className="shield"></div>
          </Link>
        </div>
      	<Route exact path='/' component={NflList} />
      	<Route exact path='/:teamName' component={Team} />
      	<Route path='/:teamName/:playerName' component={Player} />
     </div>
    );
  }
}

export default App;
