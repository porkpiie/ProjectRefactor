import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "./hockeypng.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import AddPlayer from "./components/create-player.component";
import EditPlayer from "./components/edit-player.component";
import PlayerList from "./components/player-list.component";
import Carousel1 from "./components/carousel.component";

class App extends Component {
  

  render() {
    return (
      <Router>
        <div className="container bg-inverse text-color: ">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="https://www.nhl.com" target="">
              <img src={logo} width="30" height="30" alt="nhl.com" />
            </a>
            <Link to="/" className="navbar-brand">Your Dream Hockey Line</Link>
            <div className="collpase nav-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Your Line</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Add a player</Link>
                </li>
              </ul>
            </div>           
          </nav>
          <Route path="/" exact component={PlayerList} />
          <Route path="/edit/:id" component={EditPlayer} />
          <Route path="/create" component={AddPlayer} />
          <Carousel1></Carousel1> 
        </div>
      </Router>  
    );
  }
}

export default App;
