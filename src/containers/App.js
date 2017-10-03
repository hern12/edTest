import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
  } from 'react-router-dom'
import 'bulma/css/bulma.css';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import Navbar from '../components/navbar.js'; 
import Home from './Home';
import Menu from './Menu';
import About from './About';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <Navbar/>
            <Route exact path="/" component={Home}/>
            <Route path="/Menu" component={Menu}/>
            <Route path="/about" component={About}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
