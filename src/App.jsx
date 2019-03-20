import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Contact from './components/Contact';
import Profile from './components/Profile';
import Navbar from "./components/NavbarCustom";


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Homepage} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/profile" component={Profile} />
        </div>
      </Router>
    );
  }
}

export default App;
