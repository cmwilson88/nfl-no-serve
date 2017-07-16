import React, { Component } from 'react';
import NflList from './components/NflList/NflList'
import Team from './components/Team/Team';
import Player from './components/Player/Player';

import {Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<h1>NFL Teams</h1>
      	<Route exact path='/' component={NflList} />
      	<Route exact path='/:teamName' component={Team} />
      	<Route path='/:teamName/:playerName' component={Player} />
     </div>
    );
  }
}

export default App;
