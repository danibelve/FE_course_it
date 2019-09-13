import React from 'react';
import './App.css';
import Welcome from './components/Welcome/Welcome'
import Carrousel from './components/Carrousel/Carrousel'
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {

  render() {
    return (
        <Router>
          <Route path="/" exact component={Welcome}/>
          <Route path="/carrousel/:siteId" component={Carrousel}/>
        </Router>
    );
  }
}

export default App;
